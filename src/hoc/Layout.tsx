import Header from "../components/Header";

function Layout(props:any) {
    return(
         <div className="app">
             <Header/>
             <main className="layout-cta container">
                {props.children}
             </main>
           <footer className={"footer"}>footer</footer>
        </div>)
} 

export default Layout;