const {Device, DeviceInfo} = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            const fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, "..", "static", fileName));
            const device = await Device.create({
                name,
                price,
                img: fileName,
                brandId,
                typeId,
            });

            if (info) {
                info = JSON.parse(info);
                info.forEach(element => {
                    DeviceInfo.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.id,
                    });
                });
            }

            return res.json(device);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }
    async getAll(req, res) {
        let {brandId, typeId, limit, page, info} = req.query;
        page = page || 1;
        limit = limit || 9;
        const offset = limit * (page - 1);
        let devices;
        if (!brandId && !typeId) devices = await Device.findAndCountAll({limit, offset});
        if (brandId && !typeId)
            devices = await Device.findAndCountAll({
                where: {brandId},
                limit,
                offset,
            });
        if (!brandId && typeId)
            devices = await Device.findAndCountAll({
                where: {typeId},
                limit,
                offset,
            });
        if (brandId && typeId)
            devices = await Device.findAndCountAll({
                where: {brandId, typeId},
                limit,
                offset,
            });
        return res.json(devices);
    }
    async getOne(req, res) {
        const {id} = req.params;
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: "info"}],
        });
        return res.json(device);
    }
}
module.exports = new DeviceController();
