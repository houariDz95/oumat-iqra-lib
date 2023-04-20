import {MdBusinessCenter, MdOutlineTravelExplore} from 'react-icons/md';
import {BsBookFill, BsFillMapFill} from 'react-icons/bs';
import {FaMosque, FaTheaterMasks} from 'react-icons/fa';
import {GiReceiveMoney, GiMaterialsScience, GiOpenBook, GiMicrophone} from 'react-icons/gi';
import {MdOutlineHistoryEdu, MdRocketLaunch, MdNature, MdChildCare} from 'react-icons/md';
import {IoIosPeople} from 'react-icons/io'
import {RiPoliceCarFill} from 'react-icons/ri';

export const categories = [
  { name: 'كتب جديدة', path: "new", icon: <MdBusinessCenter />, },
  { name: 'إدارة أعمال', path: 'business', icon: <MdBusinessCenter />, },
  { name: 'أدب', path: 'literature', icon: <BsBookFill />, },
  { name: 'أدب رحلات', path: 'travel.literature', icon: <MdOutlineTravelExplore />, },
  { name: 'أديان', path: 'religions', icon: <FaMosque />, },
  { name: 'اقتصاد', path: "economics", icon: <GiReceiveMoney />, },
  { name: 'تاريخ', path: "history", icon: <MdOutlineHistoryEdu /> },
  { name: 'تكنولوجيا', path: "technology", icon: <GiMaterialsScience />, },
  { name: 'جغرافيا', path: "geography", icon: <BsFillMapFill />, },
  { name: 'خيال علمي', path: "science.fiction/", icon: <MdRocketLaunch />, },
  { name: 'علوم اجتماعية', path: "social.sciences", icon: <IoIosPeople />, },
  { name: 'علوم البيئة', path: "environmental.sciences", icon: <MdNature />, },
  { name: 'علوم اللغة', path: "linguistics", icon: <GiOpenBook />, },
  { name: 'philosophy', path: "philosophy", icon: <GiOpenBook />, },
  { name: 'فنون', path: "arts", icon: <GiMicrophone />, },
  { name: 'قصص الأطفال', path: "children.stories", icon: <MdChildCare />, },
  { name: 'قصص بوليسية', path: "detective.fiction/", icon: <RiPoliceCarFill />, },
  { name: 'مسرحيات', path: "plays", icon: <FaTheaterMasks />, },
  { name: 'نقد أدبي', path: "literary.criticism", icon: <GiOpenBook />, },

];
