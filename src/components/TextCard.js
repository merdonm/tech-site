

const TextCard = ({text}) => {
  return (
    <div className="font-bold text-[2rem] lg:text-[3.2rem] leading-[2.2rem] lg:leading-[3.75rem] font-Montserrat">
        <p className="py-1">{text.text}</p>
    </div>
  )
}

export default TextCard