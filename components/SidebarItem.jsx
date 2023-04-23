import { useRouter } from "next/router";

const SidebarItem = ({path, name, icon}) => {
  const router = useRouter();
  const { cat } = router.query;

  const handelClick = () => {
    router.push(path ? `/?cat=${path}`: '/')
  }

  return (   
    <button onClick={handelClick}
    className={`
    ${path === cat  ? "bg-main-red text-white" : "text-[#222831] dark:text-white"}
    hover:bg-main-red
    hover:text-white
    group
    flex
    transition-all
    duration-500
    items-center
    justify-center 
    gap-3
    md:py-3 
    flex-row-reverse
    shadow-md
    px-2 
    rounded-xl
    md:ml-0
    ml-3
    md:mt-5 
    `}>
      <span 
      className={`${path === cat ? "text-white " : "text-[#D65A31]" } group-hover:text-white `}
      >
        {icon}
      </span>
      <span 
      style={{ opacity: path === cat ? "1" : "0.8"}}
      className='w-[70px] md:w-[120px] text-right text-sm md:text-[16px]'>
        {name}
      </span>
    </button>
  )
}

export default SidebarItem