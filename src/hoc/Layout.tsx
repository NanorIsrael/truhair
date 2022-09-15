import Header from "../components/Header";

function Layout(props:any) {
    return(
         <div >
             <Header/>
             <main className="layout-cta">
                {props.children}
             </main>
           footer
        </div>)
} 

export default Layout;