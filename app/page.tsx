import { Menu } from "./data/menu";
import { Footer, Heading1, WhyChooseUs, Statistics, Testimonial, EventComponent } from "./components";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

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
              <img src='https://tuyensinh.dhhp.edu.vn/Content/Frontend/img/logo.png' alt="LOGO" className="2xl:w-72 w-64 py-2" />
              <div className="flex-1 flex items-center gap-4 justify-center">
                {
                  Menu.map((value, index) => (
                    <div key={index} className="py-1 text-sm font-medium 2xl:text-lg">
                      <a href={value.url} className="hover:border-b-2 border-blue-500 py-1">{value.label}</a>
                    </div>
                  ))
                }
              </div>
              <a href="https://dkxt.dhhp.edu.vn" className="2xl:px-8 px-6 2xl:py-3 py-2 rounded-full text-sm 2xl:text-base bg-blue-500 text-white font-medium hover:bg-blue-600">Đăng ký xét tuyển</a>
            </div>
          </div>
        </div>
      </header>
      <main className="pt-10">
        <div className="hero relative">
          <a
            href="https://dkxt.dhhp.edu.vn"
            className="animate-bounce bg-blue-600 py-2 2xl:py-3 px-4 2xl:px-8 text-white font-medium absolute md:top-[400px] 2xl:top-[550px] md:left-[200px] 2xl:left-[270px] text-lg 2xl:text-3xl border-2 rounded-full border-white hover:bg-blue-700 transaction duration-500">Đăng ký xét tuyển</a>
          <img src="https://dhhp.edu.vn/admissions/admission-hero.png" />
        </div>
        {
          // WHY CHOOSE US
        }
        <div className="relative" style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x723/5c7362c6c417ab07e5196b05/723-d-20240130172301-y4irw.png)'
        }}>
          <div className="container mx-auto text-center" id="why-choose-us">
            <Heading1
              center
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
          <div className="text-center" id="branch">
            <Heading1
              center
              title="CÁC NGÀNH ĐÀO TẠO"
              subTitle="Mã trường Đại học Hải Phòng"
            />
            <div className="container mx-auto 2xl:px-40">
              <div className="flex gap-4 mb-4 font-bold">
                <button type="button" className="px-4 py-3 rounded bg-blue-900 text-white flex-1 md:text-lg text-center">Các ngành đào tạo</button>
                <button type="button" className="px-4 py-3 rounded bg-gray-500 text-white flex-1 md:text-lg text-center">Điểm chuẩn Đại học Hải Phòng năm 2024</button>
              </div>
              <img src="https://w.ladicdn.com/s1450x2950/5ab4a1836a6703d4257aa7a8/1200-146-20240614090026-r4gbf.jpg" alt="IMG" className="w-full" />
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x877/5c7362c6c417ab07e5196b05/877-d-20240130175248-y_85o.png)'
        }}>
          <div className="container py-4 mx-auto">
            <div className="md:flex md:py-10 items-center">
              <div className="md:w-1/2 flex justify-end">
                <img src="https://i.imgur.com/ji03ssH.png" alt="IMG" className="max-w-[400px] mr-20" />
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="flex items-center">
                    <div style={{
                      backgroundImage: 'url(https://w.ladicdn.com/s600x400/5c7362c6c417ab07e5196b05/22-20240130175108-x4q3i.png)'
                    }} className="h-[60px] w-[325px] bg-no-repeat bg-left text-center flex items-center justify-center">
                      <div className="text-2xl font-medium text-white">PHƯƠNG THỨC</div>
                    </div>
                    <div className="flex-1">
                      <img src="https://w.ladicdn.com/s600x500/5c7362c6c417ab07e5196b05/30-20240130175108-9r1ke.png" alt="IMG" className="absolute right-40 bottom-10 animated tada" />
                    </div>
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
                <div className="mb-2">Tổng điểm trung bình của 03 môn trong tổ hợp xét tuyển vào ngành học:</div>
                <ul className="list-disc pl-10">
                  <li className="mb-1">Ngành Y khoa, Dược học ≥ 24 điểm và có học lực năm lớp 12 đạt loại Giỏi</li>
                  <li className="mb-1">Ngành Điều dưỡng ≥ 19,5 điểm và có học lực năm lớp 12 đạt từ loại Khá trở lên.</li>
                  <li className="mb-1">Các ngành còn lại ≥ 18 điểm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x727/5c7362c6c417ab07e5196b05/727-d-20240130180038-jenam.png)'
        }}>
          <div className="container mx-auto py-10">
            <div className="md:flex gap-4 md:gap-10 items-center">
              <div className="md:w-1/2">
                <div className="text-xl text-white md:text-3xl font-bold mb-4 md:mb-8" data-aos="fade-right" data-aos-duration="1000">HỒ SƠ XÉT TUYỂN HỌC BẠ</div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 md:p-6 rounded-xl bg-white min-h-40 hover:bg-orange-500 hover:text-white transition duration-300">
                    01 Bản photo công chứng Học bạ THPT/GDTX đủ 3 năm học. Thời điểm thí sinh đăng ký xét tuyển chưa được cấp đủ học bạ 3 năm thì thí sinh nộp học bạ từ lớp 10 đến kì 1 lớp 12
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-orange-500 text-white hover:bg-white hover:text-gray-900 transition duration-300">
                    01 Bản photo công chứng bằng tốt nghiệp THPT
                    (Chỉ áp dụng đối với thí sinh tốt nghiệp trước năm 2024)
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-orange-500 text-white hover:bg-white hover:text-gray-900 transition duration-300">
                    01 Đơn xin xét tuyển theo mẫu của Đại học Hải Phòng (nhập thông tin hồ sơ online tại <a href="https://dkxt.dhhp.edu.vn" className="font-bold">ĐÂY</a>)
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-white min-h-40 hover:bg-orange-500 hover:text-white transition duration-300">
                    01 Bản photo công chứng căn cước công dân/chứng minh thư nhân dân (hai mặt)
                  </div>
                </div>
                <div className="text-white mb-2">
                  Lệ phí xét tuyển: 20.000đ/hồ sơ (Thí sinh nộp khi gửi hồ sơ bản cứng về trường qua đường bưu điện hoặc khi nộp hồ sơ trực tiếp tại trường)
                </div>
                <div className="text-white mb-2">
                  * Lưu ý: Từ 18/7 - 30/7, thí sinh cần đăng ký nguyện vọng xét tuyển vào Trường Đại học Hải Phòng trên hệ thống tuyển sinh của Bộ Giáo dục và đào tạo (xem hướng dẫn TẠI ĐÂY), không cần lựa chọn tổ hợp và phương thức xét tuyển.
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="mb-4 flex justify-center">
                  <img src="https://i.imgur.com/35B5fuU.png" alt="IMG" className="max-w-[500px]" data-aos="fade-left" data-aos-duration="1000" />
                </div>
                <div className="text-white mb-2 font-bold text-xl">
                  ĐỊA CHỈ NHẬN HỒ SƠ
                </div>
                <div className="text-white mb-1">
                  Thí sinh gửi chuyển phát nhanh hồ sơ hoặc đến nộp trực tiếp tại địa chỉ: PHÒNG TUYỂN SINH - TRƯỜNG ĐẠI HỌC HẢI PHÒNG
                </div>
                <div className="text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faHome} />Số 171 Phan Đăng Lưu, Kiến An, Hải Phòng
                </div>
                <div className="text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} />0398.171.171, 0773.171.171
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x962/5c7362c6c417ab07e5196b05/980-d-20240130180951-tb20q.png)'
        }} className="py-4 md:py-20 bg-cover">
          <div className="container mx-auto">
            <div style={{
              backgroundImage: 'url(https://w.ladicdn.com/s1550x1150/5c7362c6c417ab07e5196b05/32-20240130180817-lwlqf.png)'
            }} className="p-4 md:p-8 rounded-xl mx-auto border-2 border-white bg-cover max-w-[1000px]">
              <div className="text-center md:text-3xl text-white font-bold">
                <div className="mb-2">QUY TRÌNH XÉT TUYỂN</div>
                <div className="mb-2">TẠI ĐẠI HỌC HẢI PHÒNG</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x879/5c7362c6c417ab07e5196b05/879-d-20240131070338-mgxlv.png)'
        }}>
          <div className="container mx-auto py-4 md:py-10 2xl:py-20" id="infrastructure">
            <Heading1
              title="CƠ SỞ VẬT CHẤT HIỆN ĐẠI"
              subTitle="Quần thể nhà trường rộng gần 20ha tọa lạc tại Kiến An - Hải Phòng"
            />
            <div className="md:flex gap-4">
              <div className="md:w-1/2">
                <div className="flex gap-4 mb-4">
                  <div className="w-1/2">
                    <div className="w-full h-64 bg-center rounded relative" style={{
                      backgroundImage: 'url(https://w.ladicdn.com/s700x600/5c7362c6c417ab07e5196b05/dr2posur3h6c7zefit0e20230615031439_thump-20240202043545-9vncq.jpg)'
                    }}>
                      <div className="h-32 absolute bottom-0 left-0 right-0 p-4 bg-cover bg-center text-white flex items-end rounded-b-lg" style={{
                        backgroundImage: 'url(https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/49-20240131065024-fdars.png)'
                      }}>Hệ thống khách sạn thực hành 3 sao, 4 sao, 5 sao và Công ty lữ hành tại nhiều tỉnh - thành trên cả nước</div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="w-full h-64 bg-center rounded relative" style={{
                      backgroundImage: 'url(https://w.ladicdn.com/s700x600/5c7362c6c417ab07e5196b05/b4pkw2thrr2cl8aihc2j20230615033453_thump-20240202043351-bdwjr.jpg)'
                    }}>
                      <div className="h-32 absolute bottom-0 left-0 right-0 p-4 bg-cover bg-center text-white flex items-end rounded-b-lg" style={{
                        backgroundImage: 'url(https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/49-20240131065024-fdars.png)'
                      }}>Hệ thống khách sạn thực hành 3 sao, 4 sao, 5 sao và Công ty lữ hành tại nhiều tỉnh - thành trên cả nước</div>
                    </div>
                  </div>
                </div>
                <div style={{
                  backgroundImage: 'url(https://w.ladicdn.com/s900x600/5c7362c6c417ab07e5196b05/jm3tzpu3sl59ekzu70rl20230625090302_thump-20240202043516-parua.jpg)'
                }} className="h-64 relative">
                  <div className="h-32 absolute bottom-0 left-0 right-0 p-4 bg-center text-white flex items-end rounded-b-lg" style={{
                    backgroundImage: 'url(https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/49-20240131065024-fdars.png)'
                  }}>Hệ thống phòng học Kỹ năng mềm, E-Learning, Studio đặc thù và chuyên biệt</div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div style={{
                  backgroundImage: 'url(https://w.ladicdn.com/s950x850/5ab4a1836a6703d4257aa7a8/thao-truong-qp-an-20240205090734-t8ygv.jpg)'
                }} className="relative h-full">
                  <div className="h-1/2 text-center bg-no-repeat bg-cover bg-center absolute bottom-0 left-0 right-0 p-4 bg-center text-white flex items-end rounded-b-lg" style={{
                    backgroundImage: 'url(https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/49-20240131065024-fdars.png)'
                  }}>
                    <div className="max-w-[500px] mx-auto">
                      Thao trường Quốc phòng và An ninh đạt chuẩn Quốc gia ngay trong khuôn viên trường
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EventComponent />
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x1371/5c7362c6c417ab07e5196b05/1289-20240131074326-mllq3.png)'
        }} className="py-4 md:py-10 2xl:py-20">
          <Heading1 title="HỌC BỔNG CHO SINH VIÊN TƯƠNG LAI" center />
          <div className="flex justify-center">
            <img src="https://w.ladicdn.com/s1500x1400/5ab4a1836a6703d4257aa7a8/hoc-bong-1147-20240329082740-q8wq0.jpg" alt="IMG" />
          </div>
        </div>
      </main>
      <Testimonial />
      {/* <div style={{
        backgroundImage: 'url(https://w.ladicdn.com/s1440x725/5c7362c6c417ab07e5196b05/725-d-20240130185746-2z-p7.png)'
      }}>
        <div className="container mx-auto flex py-4 md:py-8 justify-center">
          <img src="https://w.ladicdn.com/s750x950/5c7362c6c417ab07e5196b05/42-20240130185605-zuz4j.png" alt="IMG" className="md:w-96" />
          <div className="bg-white w-96 rounded-lg"></div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
