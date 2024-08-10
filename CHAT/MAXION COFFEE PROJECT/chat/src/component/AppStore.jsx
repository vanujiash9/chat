import BgPng from "../assets/website/coffee-beans-bg.png"

const backgroundStyle ={
    backgroundImage: `url(${BgPng})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeate",
    height: "100%",
    width: "100%",
}

const AppStore = () => {
  return (
    <div style={backgroundStyle} className="py-14">
      <div className="contrainer">
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div>
<h1 className="ml-20 text-2xl sm:text-4xl font-semibold text-white/90 text-center sm:text-left pl-3">
  Coffee Cafe is available for Android and iOS
</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore
