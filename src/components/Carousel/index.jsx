import frankfurt from '../../assets/frankfurt.jpg'
import genebra from '../../assets/genebra.jpg'
import zurique from '../../assets/zurique.jpg'

function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src={frankfurt} alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Frankfurt</h5>
                <p>GERMANY</p>
            </div>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={genebra} alt="Second slide"/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Genebra</h5>
                <p>SWITZERLAND</p>
            </div>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={zurique} alt="Third slide"/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Zurique</h5>
                <p>SWITZERLAND</p>
            </div>
            </div>
            </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel