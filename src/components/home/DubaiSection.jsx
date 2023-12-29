const DubaiSection = ({title,children}) => {
    return (
        <div className="lg:my-20 my-8">
            <section className="px-4 lg:px-0 lg:container lg:mx-auto lg:text-center lg:max-w-[500px]">
                <h1 className="heading font-bold">{title}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat nostrum non asperiores velit unde eaque atque</p>
            </section>
            <div className="lg:container lg:mx-auto mt-2">
            {children}
            </div>
      </div>
    )
  }
  export default DubaiSection