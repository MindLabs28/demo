import { MdRocketLaunch } from "react-icons/md"
import { FaLock } from "react-icons/fa"
import { GrGroup } from "react-icons/gr"
import { ReactNode, useCallback, useEffect, useRef } from "react"
import { FaThumbsUp } from "react-icons/fa"
import { isAtRightHeight } from "../../func/scroll"

const Offers = () => {
  const scrollRef = useRef<HTMLSelectElement>(null)

  const onScroll = useCallback(() => {
    if (scrollRef.current) {
      if (isAtRightHeight(scrollRef.current)) {
        scrollRef.current.style.transform = "translateX(0)"
        scrollRef.current.style.opacity = "1"
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <main className="">
      <div className="pl-5 pt-5">
        <h3 className="text-primary text-[1.5rem] font-semibold text-center">
          What We Offer
        </h3>
        <h2 className="text-secondary font-bold text-[2rem] text-center">
          We Leave Your Car Looking Clean
        </h2>
      </div>
      <section
        ref={scrollRef}
        className=" flex justify-around py-6 transition-all duration-[0.8s] translate-x-[-70%] delay-200 opacity-0"
      >
        <Card
          color="#ec1254"
          title="Quick Service"
        >
          <MdRocketLaunch
            size={25}
            color="white"
          />
        </Card>
        <Card
          color="#f27c14"
          title="Secured Service"
        >
          <FaLock
            size={20}
            color="white"
          />
        </Card>
        <Card
          //   color="#00ADB5"
          color="dodgerblue"
          title="Expert Employee"
        >
          <GrGroup
            size={25}
            color="white"
          />
        </Card>
        <Card
          color="#3247FF"
          title="100% Satisfaction"
        >
          <FaThumbsUp
            size={20}
            color="white"
          />
        </Card>
      </section>
    </main>
  )
}

export default Offers

const Card = ({
  children,
  color,
  title,
}: {
  children: ReactNode
  color: string
  title: string
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div
        style={{ backgroundColor: color }}
        className={`aspect-square h-[50px] rounded-full grid place-items-center`}
      >
        {children}
      </div>
      <p className="text-teal-500">{title}</p>
    </div>
  )
}
