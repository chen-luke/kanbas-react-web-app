import ModuleList from "../Modules/List";

function Home() {
    const style = "btn btn-sm btn-light mt-2 text-start border border-secondary"
    return (
        <div className="pe-5 d-flex mt-4">
            <ModuleList />
            <div className="col">
                <div className="col d-flex flex-column px-5">
                    <button type="button" className={style}>Export Existing Content</button>
                    <button type="button" className={style}>Import from Commons</button>
                    <button type="button" className={style}>Choose Home Page</button>
                    <button type="button" className={style}>View Course Stream</button>
                    <button type="button" className={style}>New Announcement</button>
                    <button type="button" className={style}>New Analytics</button>
                    <button type="button" className={style}>View Course Notification</button>
                </div>
                <div className="mt-4 px-5">
                    <h3>To Do</h3>
                    <hr />
                    <div>Grade A1</div>
                    <div>Grade A2</div>
                </div>
            </div>
        </div>
    );
}
export default Home;