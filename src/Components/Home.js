import React from 'react'

export const Home = () => {
  return (
    <>
    <div className="home-parent-container">
        <div className="home-hero-container">
            <h1>Welcome to <span>GLAMGLOW</span></h1>
            <p>GLAMGLOW is a dynamic and forward-thinking makeup company that has been revolutionizing the beauty industry since its inception.</p>
            <button className="btn" onClick={()=>window.location='/maybelline'}>Shop now</button>
        </div>
        <div className="home-brands-container">
            <h1>Brands we work with</h1>
            <div className="home-brand-outer-container">
                <div className="home-brand-item-container">
                    <img src="data:image/png;base64,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" alt=""/>
                </div>
                <div className="home-brand-item-container">
                    <img src="https://vectorlogoseek.com/wp-content/uploads/2018/12/loreoal-paris-vector-logo.png" alt=""/>
                </div>
                <div className="home-brand-item-container">
                    <img src="https://cdn.shopify.com/s/files/1/0081/2774/2014/files/CM_Gradient.png?height=628&pad_color=fff&v=1614304950&width=1200" alt=""/>
                </div>
                <div className="home-brand-item-container">
                    <img src="https://idapharmacy.com/wp-content/uploads/2016/09/logo-marcelle.jpg" alt=""/>
                </div>
                <div className="home-brand-item-container">
                    <img src="https://logovectordl.com/wp-content/uploads/2021/03/milani-cosmetics-logo-vector.png" alt=""/>
                </div>
                <div className="home-brand-item-container">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/669f324914149.5d9df3b9e710f.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
