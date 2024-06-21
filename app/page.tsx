import Image from "next/image";
import { Menu } from "./data/menu";
import { Footer, Heading1, WhyChooseUs } from "./components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tuyển sinh - Trường Đại Học Hải Phòng</title>
      </Head>
      <header>
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-4">
              <img src='https://tuyensinh.dhhp.edu.vn/Content/Frontend/img/logo.png' alt="LOGO" className="w-72 py-2" />
              {
                Menu.map((value, index) => (
                  <div key={index} className="py-1">
                    {value.label}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="hero">
          <img src="https://w.ladicdn.com/s1440x748/5c7362c6c417ab07e5196b05/748-d-20240130170033-8esaf.png" />
        </div>
        {
          // WHY CHOOSE US
        }
        <div className="relative" style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x723/5c7362c6c417ab07e5196b05/723-d-20240130172301-y4irw.png)'
        }}>
          <div className="container mx-auto text-center">
            <Heading1
              title="TẠI SAO NÊN CHỌN ĐẠI HỌC Hải phòng?"
              subTitle="Trường Đại học Hải Phòng tự hào mang đến cho sinh viên một môi trường học tập hiện đại, thân thiện và chuyên nghiệp."
            />
            <WhyChooseUs />
            <div className="flex gap-4 md:gap-10 justify-center py-4 md:py-8 rounded md:rounded-lg bg-cover" style={{
              backgroundImage: 'url(	https://w.ladicdn.com/s1550x650/5c7362c6c417ab07e5196b05/20-20240130173313-k02ok.png)'
            }}>
              <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center">
                <div className="text-blue-500 text-lg md:text-2xl font-bold">37.500+</div>
                <div className="text-sm">Sinh viên đã và đang theo học</div>
              </div>
              <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center">
                <div className="text-blue-500 text-lg md:text-2xl font-bold">36</div>
                <div className="text-sm">Ngành đào tạo hệ đại học chính quy</div>
              </div>
              <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center">
                <div className="text-blue-500 text-lg md:text-2xl font-bold">100%</div>
                <div className="text-sm">Sinh viên được kết nối việc làm</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x2911/5c7362c6c417ab07e5196b05/2058-d-20240130173842-_uk1-.png)'
        }}>
          <div className="text-center">
            <Heading1
              title="CÁC NGÀNH ĐÀO TẠO"
              subTitle="Mã trường Đại học Hải Phòng"
            />
            <div className="container mx-auto">
              <div className="flex gap-4 mb-4">
                <button type="button" className="px-4 py-2 rounded bg-blue-500 text-white flex-1 md:text-lg text-center">Các ngành đào tạo</button>
                <button type="button" className="px-4 py-2 rounded bg-blue-500 text-white flex-1 md:text-lg text-center">Điểm chuẩn Đại học Đại Nam năm 2024</button>
              </div>
              <img src="https://w.ladicdn.com/s1450x2950/5ab4a1836a6703d4257aa7a8/1200-146-20240614090026-r4gbf.jpg" alt="IMG" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex"></div>
      </main>
      <div style={{
        backgroundImage: 'url(https://w.ladicdn.com/s1440x887/5c7362c6c417ab07e5196b05/887-d-20240130184218-oo0be.png)'
      }} className="md:min-h-[885px] bg-cover w-full no-repeat bg-right flex flex-col justify-center">
        <Heading1 title="NHẬN XÉT CỦA CÁC DOANH NGHIỆP VỀ CHẤT LƯỢNG ĐÀO TẠO" />
        <div className="container mx-auto pb-4 md:pb-10 flex justify-center">
        <div className="shadow rounded-lg bg-white flex p-4">
          <div className="h-80 w-64 bg-slate-100 rounded-lg">
            
          </div>
          <div className="md:w-[700px]">

          </div>
        </div>
        </div>
      </div>
      <div style={{
        backgroundImage: 'url(https://w.ladicdn.com/s1440x725/5c7362c6c417ab07e5196b05/725-d-20240130185746-2z-p7.png)'
      }}>
        <div className="container mx-auto flex py-4 md:py-8 justify-center">
          <img src="https://w.ladicdn.com/s750x950/5c7362c6c417ab07e5196b05/42-20240130185605-zuz4j.png" alt="IMG" className="md:w-96" />
          <div className="bg-white w-96 rounded-lg"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
