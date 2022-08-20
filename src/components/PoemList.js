import PoemCard from './PoemCard';
import './PoemList.css'

const POEMS = [
  {
    title: "Ozymandias",
    author: "Percy Bysshe Shelley",
    lines: [
      "I met a traveller from an antique land",
      "Who said: \"Two vast and trunkless legs of stone",
      "Stand in the desert. Near them on the sand,",
      "Half sunk, a shattered visage lies, whose frown",
      "And wrinkled lip and sneer of cold command",
      "Tell that its sculptor well those passions read",
      "Which yet survive, stamped on these lifeless things,",
      "The hand that mocked them and the heart that fed.",
      "And on the pedestal these words appear:",
      "'My name is Ozymandias, King of Kings:",
      "Look on my works, ye mighty, and despair!'",
      "Nothing beside remains. Round the decay",
      "Of that colossal wreck, boundless and bare,",
        "The lone and level sands stretch far away\"."
    ]
  },
  {
    "title": "Now I knew I lost her --",
    "author": "Emily Dickinson",
    "lines": [
      "Now I knew I lost her --",
      "Not that she was gone --",
      "But Remoteness travelled",
      "On her Face and Tongue.",
      "",
      "Alien, though adjoining",
      "As a Foreign Race --",
      "Traversed she though pausing",
      "Latitudeless Place.",
      "",
      "Elements Unaltered --",
      "Universe the same",
      "But Love's transmigration --",
      "Somehow this had come --",
      "",
      "Henceforth to remember",
      "Nature took the Day",
      "I had paid so much for --",
      "His is Penury",
      "Not who toils for Freedom",
      "Or for Family",
      "But the Restitution",
      "Of Idolatry."
    ]
  },
  {
    "title": "A Flower will not trouble her, it has so small a Foot,",
    "author": "Emily Dickinson",
    "lines": [
      "A Flower will not trouble her, it has so small a Foot,",
      "And yet if you compare the Lasts,",
      "Hers is the smallest Boot --"
    ]
  },
  {
    "title": "Sonnet XLIV: Press'd by the Moon",
    "author": "Charlotte Smith",
    "lines": [
      "Press'd by the Moon, mute arbitress of tides,",
      "While the loud equinox its power combines,",
      "The sea no more its swelling surge confines,",
      "But o'er the shrinking land sublimely rides.",
      "The wild blast, rising from the Western cave,",
      "Drives the huge billows from their heaving bed;",
      "Tears from their grassy tombs the village dead,",
      "And breaks the silent sabbath of the grave!",
      "With shells and sea-weed mingled, on the shore",
      "Lo! their bones whiten in the frequent wave;",
      "But vain to them the winds and waters rave;",
      "They hear the warring elements no more:",
      "While I am doom'd—by life's long storm opprest,",
      "To gaze with envy on their gloomy rest."
    ]
  }

]

const PoemList = () => {
  return (
    <section className=" bg-dark bg-opacity-10" id="poem-list-container">
      <div className="just-for-space d-none d-md-block py-4"></div>
      <header className="text-serif fs-1 fst-italic container">Poems</header>
      <div className='container'>
        <div className="card-columns">
          <header className="d-flex flex-column mt-md-4 text-bg-light align-items-bottom align-items-end">
            <p className="d-flex">
              <a href="/peoms" className='link-dark d-flex align-items-center '><span className='fs-4 text-sans para pb-2'> Noba of poems</span> <i className="bi bi-chevron-right text-dark fs-2" ></i></a>
            </p>
          </header>
          <PoemCard poem={POEMS[0]} />
          <PoemCard poem={POEMS[1]} />
          <PoemCard poem={POEMS[2]} />
          <PoemCard poem={POEMS[3]} />
        </div>
    </div>
    <div className="just-for-space d-none d-md-block py-4"></div>
    </section>
  )
}

export default PoemList;