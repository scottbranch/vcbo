export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-8">
        <div className="col-span-6">
          <h1>IMPRESSIVE STRUCTURES. BEAUTIFUL OUTCOMES.</h1>
        </div>
      </div>
      <div className="columns-4 mt-8">
        <div>
          <img src="/Hero1.jpg" />
          <p className="mt-4">Architecture</p>
        </div>
        <div>
          <img src="/Hero2.jpg" />
          <p className="mt-4">For People</p>
        </div>
        <div>
          <img src="/Hero3.jpg" />
          <p className="mt-4">Utah</p>
        </div>
        <div>
          <img src="/Hero4.jpg" />
          <p className="mt-4">1973</p>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <div className="col-span-2">
          <h3>VCBO Architecture creates spaces for people to thrive.</h3>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-10">
        <div className="col-start-3 col-span-1">
          <p>
            Since 1973, we have been shaping built environments to support human
            connection, balancing skill and precision with an unmatched passion
            for architecture, design, planning, and sustainability.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <div className="col-start-2 col-span-1">
          <img src="/Feat1.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-4">
        <div className="col-span-1">
          <p>Environments That Evoke Possibility—Featured Project Name Here</p>
        </div>
        <div className="col-start-2 col-span-3">
          <img className="w-full" src="/Feat2.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-8">
        <div className="col-span-2 col-start-2">
          <p>
            Small teaser blurb. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi et bibendum libero. Donec ultricies turpis
            lobortis sapien laoreet, in rutrum mauris pharetra. In posuere
            faucibus est quis tempus.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <img className="col-span-4 w-full" src="/FullImage.jpg" />
      </div>
      <div className="grid grid-cols-4 mt-16">
        <div className="col-start-3 col-span-2">
          <h4>
            We’re curiosity-driven. So we create places for curiosity to thrive.
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-40">
        <div className="col-start-1 col-span-2">
          <h4>
            Headline for Article. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi et libero.
          </h4>
          <p className="mt-80">
            Small teaser blurb. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi et bibendum libero. Donec ultricies turpis
            lobortis sapien laoreet, in rutrum mauris pharetra. In posuere
            faucibus est quis tempus.
          </p>
        </div>
        <div className="col-start-3 col-span-2">
          <img className="w-full" src="/ArticleImage.jpg" />
        </div>
      </div>
      <footer></footer>
    </div>
  )
}
