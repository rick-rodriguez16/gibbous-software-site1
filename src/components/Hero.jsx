import heroImg from '../assets/photo1.png'

function Hero() {

    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Building Solutions, Exceeding Expectations </h1>
                        <p className="lead">Software development is about crafting tailored solutions. By blending technical expertise with a deep understanding of client needs, we create impactful, reliable, and user-focused products.</p>
                        {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero