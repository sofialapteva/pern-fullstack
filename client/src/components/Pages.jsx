import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Pagination} from "react-bootstrap";
import {Context} from "..";
const Pages = observer(() => {
    const {device} = useContext(Context);
    const pageCount = Math.ceil(device.totalCount / device.limit);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }
    return (
        <Pagination>
            {pages.map(page => (
                <Pagination.Item
                    key={page}
                    active={device.selectedPage === page}
                    onClick={() => device.setSelectedPage(page)}
                >
                    {page}
                </Pagination.Item>
            ))}
        </Pagination>
    );
});

export default Pages;
