interface Props {
  url: string
  imgSrc: string
  title: string
}

const Card: React.FC<Props> = ({ url, imgSrc, title }) => {
  return (
    <div className="text-center">
      <div className="w-full aspect-video overflow-hidden border-2 border-gray-400 rounded-md 
        hover:border-white">
        <a href={url} target="_blank">
          <img src={imgSrc} className="w-full h-full object-fill" />
        </a>
      </div>
      <h1 className="text-center truncate mt-3">{title}</h1>
    </div>
  )
}


export default Card
