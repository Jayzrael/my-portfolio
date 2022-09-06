const Tech = ({ className, src, alt, text }) => {
   return (
      <div className={className}>
         <img className='w-20 mx-auto' src={src} alt={alt} />
         <p className='my-4'>{text}</p>
      </div>
   )
}
export default Tech