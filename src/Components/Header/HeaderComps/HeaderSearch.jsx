import "../../../assets/Styles/Header/HeaderSearch.css"


function HeaderSearch() {
    return(
            <div className="flexsearch">
                <div className="flexsearch--wrapper">
                    <form className="flexsearch--form" action="#" method="post">
                        <div className="flexsearch--input-wrapper">
                            <input className="flexsearch--input" type="search" placeholder="Buscar alguna noticia"/>
                        </div>
                        <input className="flexsearch--submit" type="submit" value="&#10140;"/>
                    </form>
                </div>
            </div>
    )

}
export default HeaderSearch

