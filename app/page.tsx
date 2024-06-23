import { Menu } from "./data/menu";
import { Footer, Heading1, WhyChooseUs, Statistics } from "./components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tuyển sinh - Trường Đại Học Hải Phòng</title>
      </Head>
      <header className="fixed top-0 left-0 right-0 z-20">
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-4">
              <img src='https://tuyensinh.dhhp.edu.vn/Content/Frontend/img/logo.png' alt="LOGO" className="w-72 py-2" />
              <div className="flex-1 flex items-center gap-4 justify-center">
                {
                  Menu.map((value, index) => (
                    <div key={index} className="py-1 font-medium text-lg">
                      <a href="#" className="hover:border-b-2 border-blue-500 py-1">{value.label}</a>
                    </div>
                  ))
                }
              </div>
              <a href="https://dkxt.dhhp.edu.vn" className="px-8 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600">Đăng ký xét tuyển</a>
            </div>
          </div>
        </div>
      </header>
      <main className="pt-10">
        <div className="hero relative">
          <button type="button" className="bg-blue-500 py-3 px-8 text-white font-medium absolute top-[550px] left-[270px] text-3xl">Đăng ký xét tuyển</button>
          <img src="https://dhhp.edu.vn/admissions/admission-hero.png" />
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
            <Statistics />
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
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x877/5c7362c6c417ab07e5196b05/877-d-20240130175248-y_85o.png)'
        }}>
          <div className="container py-4 md:py-10 2xl:py-40 mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2 flex justify-end">
                <img src="https://w.ladicdn.com/s850x1100/5c7362c6c417ab07e5196b05/29-20240130175108-povmy.png" alt="IMG" className="max-w-[576px] -mt-40 mr-20" />
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="flex items-center">
                    <div>
                      <div className="bg-orange-500 text-2xl font-medium px-4 py-1 text-white">PHƯƠNG THỨC</div>
                    </div>
                    <img src="https://w.ladicdn.com/s600x500/5c7362c6c417ab07e5196b05/30-20240130175108-9r1ke.png" alt="IMG" className="absolute right-60 bottom-10" />
                  </div>
                  <div className="flex items-end">
                    <img src="https://w.ladicdn.com/s750x450/5c7362c6c417ab07e5196b05/24-20240130175108-qhoej.png" className="w-96" />
                    <div><img src="https://w.ladicdn.com/s550x400/5c7362c6c417ab07e5196b05/23-20240130175108-pyjde.png" className="w-52" /></div>
                  </div>
                </div>
                <div className="font-bold mb-2">1. Xét điểm thi tốt nghiệp THPT 2024</div>
                <div className="font-bold mb-2">2. Xét học bạ THPT:</div>
                <ul className="list-disc pl-10">
                  <li>
                    Xét tuyển học bạ theo tổng điểm trung bình năm học lớp 11 và học kỳ 1 lớp 12 theo tổ hợp môn xét tuyển. Điểm xét tuyển = (Điểm môn 1 + Điểm môn 2 + Điểm môn 3). Điểm môn 1 = (TB cả năm lớp 11 môn 1 + TB kỳ 1 lớp 12 môn 1) / 2 ; Điểm môn 2, Điểm môn 3 cách tính tương tự Điểm môn 1
                  </li>
                  <li>
                    Xét tuyển học bạ theo tổng điểm trung bình năm học lớp 12 theo tổ hợp môn xét tuyển. Điểm xét tuyển = (Điểm môn 1 + Điểm môn 2 + Điểm môn 3). Trong đó, Điểm môn 1 = TB cả năm lớp 12 môn 1;  Điểm môn 2 = TB cả năm lớp 12 môn 2; Điểm môn 3 = TB cả năm lớp 12 môn 3
                  </li>
                </ul>
                <div className="font-bold mb-2">3. Xét tuyển thẳng theo quy định của Bộ GD&ĐT và của Nhà trường</div>
                <div className="text-blue-800 font-semibold text-xl mb-2">ĐIỂM SÀN NHẬN HỒ SƠ XÉT HỌC BẠ</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x727/5c7362c6c417ab07e5196b05/727-d-20240130180038-jenam.png)'
        }}>
          <div className="container mx-auto py-10">
            <div className="flex">
              <div className="text-xl text-white md:text-3xl font-bold">HỒ SƠ XÉT TUYỂN HỌC BẠ</div>
            </div>
          </div>
        </div>
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
