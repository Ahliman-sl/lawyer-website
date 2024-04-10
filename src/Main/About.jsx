import lawyer from "../Images/lawyermain.jpg";
export default function About() {
  return (
    <div className="w-full h-max flex flex-col lg:flex-row lg:gap-0">
      <div className="w-full h-[36rem] lg:h-[45rem] lg:w-1/2  flex items-center justify-center">
        <img
          src={lawyer}
          className="w-[35rem] h-[35rem] object-cover rounded-md shadow-xl px-2"
        />
      </div>
      <div className="w-full lg:w-1/2 h-[45rem]  flex flex-col items-center justify-center gap-10 pl-5">
        <div className="w-full h-max">
          <p className="w-max h-max text-md text-gray-500 text-start font-bold">
            Haqqımda
          </p>
        </div>
        <h2 className="w-full h-max text-4xl font-bold text-black ">
          Vəkil Elnur Quliyev
        </h2>
        <p className="w-full h-max text-xl">
          {`Mən, "Elnur Quliyev", hüquq sahəsində güclü bir təcrübəyə malik
            vəkillərə qarşı olan məsuliyyət və öhdəliklərimi qarşılamağa məhkum
            olduğum bir məhkumiyət qurumu var. Müştərilərimə hüquqi məsləhətlərin
            verilməsi, onların hüquqi məsələlərinin həll edilməsi və onları
            müdafiə etmək mənim əsas vəzifələrimdən biridir. Həmçinin, mənim
            fəaliyyət sahəmə geniş hüquqi təcrübə, təcrübə və biliklərimi
            birləşdirərək müştərilərimin maraqlarını əsas qoyaraq onların
            məsələlərini müvafiq şəkildə həll etmək məqsədindəyəm. Bağlılığım,
            dürüstlüyüm və sərbəst məsləhət görmə imkanım, müştərilərimin
            məsələlərini möhkəmləndirməyə kömək edir.`}
        </p>
        <div className="w-full h-max flex items-start">
          <button className="w-[10rem]  h-[4rem] bg-red-700 text-stone-50 font-semibold hover:bg-stone-50 hover:text-red-700 transition duration-300 hover:border-2 border-black">
            Daha ətraflı
          </button>
        </div>
      </div>
    </div>
  );
}
