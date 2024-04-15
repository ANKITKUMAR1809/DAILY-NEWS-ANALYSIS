import css from './Nav.module.css';
const Nav = ({ list,onClickNav,onSearch}) => {
    return (
        <div className={css.main}>
            <div className={css.logoText} onClick={()=>{onClickNav("Home")}}>
                <h1>DNA</h1>
                <h6>Daily News Analysis</h6>
            </div>
            <div className={css.navList}>
                <ul >
                    {list.map((item) => <li  key={item} onClick={(items)=>{onClickNav(items)}}>{item}</li>)}
                </ul>
            </div>
            <div className={css.searchBar}>
                <input type="search" placeholder='eg. science' className={css.newsInput} onKeyDown={(event)=>onSearch(event)}/>
            </div>

        </div>
    )
}
export default Nav;