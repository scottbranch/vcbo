export default function Article() {
  return (
    <div className="container mx-auto mt-40 article">
      <div className="grid grid-cols-4">
        <div className="col-span-2 flex content-end flex-wrap">
          <div>
            <h1>Article Title Goes Here</h1>
          </div>
          <div className="mt-16">
            <h4>31 Oct 2022</h4>
          </div>
        </div>
        <div className="col-span-2">
          <img src="/etc/Rectangle.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-start-2 col-span-2">
          <p className="body-large mb-8 mt-40">
            Lead in Headline/
            <br />
            Introduction Goes Here
          </p>
          <div className="body-copy">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              ultricies lacus sed turpis tincidunt. Quisque sagittis purus sit
              amet volutpat consequat mauris nunc. Amet justo donec enim diam
              vulputate. Ac turpis egestas integer eget aliquet nibh praesent
              tristique magna. Pellentesque nec nam aliquam sem et. Condimentum
              mattis pellentesque id nibh tortor id aliquet lectus proin. Purus
              semper eget duis at tellus at urna condimentum. Egestas tellus
              rutrum tellus pellentesque eu tincidunt tortor. Tortor id aliquet
              lectus proin nibh nisl condimentum id. Platea dictumst quisque
              sagittis purus sit. Hac habitasse platea dictumst vestibulum
              rhoncus est. Lorem sed risus ultricies tristique nulla aliquet
              enim tortor at. Lectus quam id leo in vitae turpis. Elementum
              integer enim neque volutpat ac tincidunt vitae semper. Accumsan
              sit amet nulla facilisi morbi. Sit amet dictum sit amet justo.
              Lectus magna fringilla urna porttitor. Venenatis cras sed felis
              eget velit.
            </p>

            <p>
              Consectetur lorem donec massa sapien faucibus et molestie ac
              feugiat. Congue nisi vitae suscipit tellus. Urna et pharetra
              pharetra massa massa ultricies mi quis hendrerit. Pellentesque
              elit eget gravida cum. Quam elementum pulvinar etiam non quam
              lacus. Donec ac odio tempor orci dapibus ultrices in. Semper
              feugiat nibh sed pulvinar proin gravida hendrerit. Ac tortor vitae
              purus faucibus ornare suspendisse sed nisi. Odio pellentesque diam
              volutpat commodo sed egestas egestas fringilla. Sed tempus urna et
              pharetra pharetra massa. Amet massa vitae tortor condimentum.
              Porta nibh venenatis cras sed felis. Enim sit amet venenatis urna
              cursus eget nunc.
            </p>

            <p>
              Volutpat sed cras ornare arcu. Parturient montes nascetur
              ridiculus mus mauris vitae ultricies leo integer. Et ultrices
              neque ornare aenean euismod elementum nisi quis eleifend. Sit amet
              tellus cras adipiscing enim eu turpis egestas. Quisque non tellus
              orci ac auctor augue mauris. A lacus vestibulum sed arcu non odio
              euismod. Facilisis leo vel fringilla est ullamcorper eget nulla
              facilisi etiam. Dictumst vestibulum rhoncus est pellentesque elit
              ullamcorper dignissim cras. Sed vulputate mi sit amet mauris
              commodo quis imperdiet massa. In ornare quam viverra orci sagittis
              eu volutpat. Sit amet consectetur adipiscing elit ut aliquam.
            </p>
            <img src="/etc/Rectangle.jpg" />
            <p>
              cras adipiscing enim eu turpis egestas. Quisque non tellus orci ac
              auctor augue mauris. A lacus vestibulum sed arcu non odio euismod.
              Facilisis leo vel fringilla est ullamcorper eget nulla facilisi
              etiam. Dictumst vestibulum rhoncus est pellentesque elit
              ullamcorper dignissim cras. Sed vulputate mi sit amet mau.
            </p>
          </div>
          <p className="mt-40">Words By: Author Name</p>
          <p>Culture</p>
        </div>
      </div>
    </div>
  )
}
