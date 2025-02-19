import style from "../../style/main-layout.module.scss";
import SearchBar from './SearchBar'
const CreateAction = ({ forPage }) => {
    return (
        <div className={style['action-Container']}>
            <SearchBar />
            <div className={style['action-buttons']}>
                <button className="ui secondary button">
                    Create {forPage}
                </button>
                <button className="ui secondary button">
                    Export as CSV
                </button>
            </div>
        </div>
    )
}

export default CreateAction