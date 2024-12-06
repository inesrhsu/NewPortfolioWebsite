import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Home, About, Work, Contact, Photography} from './pages';
import {Coral, VRBlackHole, StarCluster, IrisSim,Souls,Spring,Year2235,
  AIAliens,HappyDumplings,StellarDrawingTool,ButterflyDandelions,
  ThatTimeIGotReincarnatedAsAFerret,SunMoonLakeTale,SpawningOfSouls,
  StoneNightmare,FountainOfLife,Carousel,Winter,Angel,SeaCave,ShaderExperiments,
  PhotographsForTheFuture, Carinavis, Computation, PersonalWebsite} from './projects';

const App = () => {
  return (
    <main>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/home" element={<Home/>} /> */}
                <Route path="/about" element={<About/>} />
                <Route path="/work" element={<Work/>} />
                <Route path="/photography" element={<Photography/>} />
                <Route path="/contact" element={<Contact/>} />
                
                <Route path="/coral" element={<Coral/>} />
                <Route path="/vRBlackHole" element={<VRBlackHole/>} />
                <Route path="/starCluster" element={<StarCluster/>} />
                <Route path="/irisSim" element={<IrisSim/>} />
                <Route path="/souls" element={<Souls/>} />
                <Route path="/spring" element={<Spring/>} />
                <Route path="/year2235" element={<Year2235/>} />
                <Route path="/aIAliens" element={<AIAliens/>} />
                <Route path="/happyDumplings" element={<HappyDumplings/>} />
                <Route path="/stellarDrawingTool" element={<StellarDrawingTool/>} />
                <Route path="/butterflyDandelions" element={<ButterflyDandelions/>} />
                <Route path="/thatTimeIGotReincarnatedAsAFerret" element={<ThatTimeIGotReincarnatedAsAFerret/>} />
                <Route path="/sunMoonLakeTale" element={<SunMoonLakeTale/>} />
                <Route path="/spawningOfSouls" element={<SpawningOfSouls/>} />
                <Route path="/stoneNightmare" element={<StoneNightmare/>} />
                <Route path="/fountainOfLife" element={<FountainOfLife/>} />
                <Route path="/carousel" element={<Carousel/>} />
                <Route path="/winter" element={<Winter/>} />
                <Route path="/angel" element={<Angel/>} />
                <Route path="/seaCave" element={<SeaCave/>} />
                <Route path="/shaderExperiments" element={<ShaderExperiments/>} />
                <Route path="/photographsForTheFuture" element={<PhotographsForTheFuture/>} />
                <Route path="/carinavis" element={<Carinavis/>} />
                <Route path="/computation" element={<Computation/>} />
                <Route path="/personalWebsite" element={<PersonalWebsite/>} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    </main>
  )
}

export default App
