import {MdBusinessCenter, MdOutlineTravelExplore} from 'react-icons/md';
import {BsBookFill, BsFillMapFill} from 'react-icons/bs';
import {FaMosque, FaTheaterMasks} from 'react-icons/fa';
import {GiReceiveMoney, GiMaterialsScience, GiOpenBook, GiMicrophone} from 'react-icons/gi';
import {MdOutlineHistoryEdu, MdRocketLaunch, MdNature, MdChildCare, MdHealthAndSafety, MdScience, MdPsychology} from 'react-icons/md';
import {IoIosPeople} from 'react-icons/io'
import {RiPoliceCarFill, RiContactsBook2Fill} from 'react-icons/ri';
import {AiFillHome} from 'react-icons/ai';
import {ImBooks} from 'react-icons/im';
import {FcPodiumWithSpeaker} from 'react-icons/fc';
import {SiPoetry} from 'react-icons/si';

export const categories = [
  { name: 'كتب جديدة',  icon: <AiFillHome />, },
  { name: 'إدارة أعمال', path: 'business', icon: <MdBusinessCenter />, },
  { name: 'أدب', path: 'literature', icon: <BsBookFill />, },
  { name: 'أدب رحلات', path: 'travel.literature', icon: <MdOutlineTravelExplore />, },
  { name: 'أديان', path: 'religions', icon: <FaMosque />, },
  { name: 'اقتصاد', path: "economics", icon: <GiReceiveMoney />, },
  { name: 'تاريخ', path: "history", icon: <MdOutlineHistoryEdu /> },
  { name: 'تكنولوجيا', path: "technology", icon: <GiMaterialsScience />, },
  { name: 'جغرافيا', path: "geography", icon: <BsFillMapFill />, },
  { name: 'خيال علمي', path: "science.fiction", icon: <MdRocketLaunch />, },
  { name: 'روايات', path: "novels", icon: <ImBooks />, },
  { name: 'سياسة', path: "politics", icon: <FcPodiumWithSpeaker />, },
  { name: 'سير الأعلام', path: "biographies", icon: <RiContactsBook2Fill />, },
  { name: 'شعر', path: "poetry", icon: <SiPoetry />, },
  { name: 'صحة', path: "health", icon: <MdHealthAndSafety />, },
  { name: 'علم نفس', path: "psychology", icon: <MdPsychology />, },
  { name: 'علوم', path: "science", icon: <MdScience />, },
  { name: 'علوم اجتماعية', path: "social.sciences", icon: <IoIosPeople />, },
  { name: 'علوم البيئة', path: "environmental.sciences", icon: <MdNature />, },
  { name: 'علوم اللغة', path: "linguistics", icon: <GiOpenBook />, },
  { name: 'فلسفة', path: "philosophy", icon: <GiOpenBook />, },
  { name: 'فنون', path: "arts", icon: <GiMicrophone />, },
  { name: 'قصص الأطفال', path: "children.stories", icon: <MdChildCare />, },
  { name: 'قصص بوليسية', path: "detective.fiction", icon: <RiPoliceCarFill />, },
  { name: 'مسرحيات', path: "plays", icon: <FaTheaterMasks />, },
  { name: 'نقد أدبي', path: "literary.criticism", icon: <GiOpenBook />, },
];
