import { Footer, Heading1, WhyChooseUs, Statistics, Testimonial, EventComponent, Infrastructure } from "./components";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import './css/style.css';
import Header from "./components/layout/header";

export default function Home() {

  return (
    <>
      <Head>
        <title>Tuyển sinh - Trường Đại Học Hải Phòng</title>
      </Head>
      <Header />
      <main className="md:pt-10">
        <div className="hero relative">
          <a
            href="https://dkxt.dhhp.edu.vn"
            className="animate-bounce bg-blue-600 text-xs md:text-2xl left-10 py-1 md:py-2 2xl:py-3 px-2 md:px-6 2xl:px-8 text-white font-medium absolute top-[120px] md:top-[400px] 2xl:top-[550px] md:left-[200px] 2xl:left-[270px] text-lg 2xl:text-3xl border-2 rounded-full border-white hover:bg-blue-700 transaction duration-500">Tra cứu kết quả</a>
          <img src="https://dhhp.edu.vn/admissions/admission-hero.png" />
        </div>
        {
          // WHY CHOOSE US
        }
        <div className="relative" style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x723/5c7362c6c417ab07e5196b05/723-d-20240130172301-y4irw.png)'
        }}>
          <div className="container mx-auto text-center px-2 md:px-0" id="why-choose-us">
            <Heading1
              center
              title="TẠI SAO NÊN CHỌN ĐẠI HỌC Hải phòng?"
              subTitle={
                <div className="text-sm md:text-base max-w-[1000px]">
                  Trường Đại học Hải Phòng tự hào mang đến cho sinh viên: (i) môi trường học tập hiện đại, thân thiện và chuyên nghiệp; (ii) đào tạo đa ngành, đa lĩnh vực; (iii) khuôn viên rộng lớn, ký túc xá khang trang 2.000 chỗ ở, khu phức hợp thể thao hiện đại.
                </div>
              }
            />
            <WhyChooseUs />
            <Statistics />
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://dhhp.edu.vn/admissions/bg-line3.png)'
        }} className="bg-cover">
          <div className="text-center" id="branch">
            <Heading1
              center
              title="CÁC NGÀNH ĐÀO TẠO"
              subTitle={<>Mã trường <b className="text-red-500">THP</b></>}
            />
            <div className="container mx-auto 2xl:px-40">
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4 font-bold px-2 md:px-0 uppercase">
                <button type="button" className="px-4 py-3 rounded bg-blue-900 text-white flex-1 md:text-lg text-center">
                  Các ngành đào tạo
                </button>
                <a href="https://admission.dhhp.edu.vn/catalog" className="px-4 py-3 uppercase rounded bg-gray-500 text-white flex-1 md:text-lg text-center hover:bg-blue-900 transition duration-500 relative">
                  <div>Thông tin chi tiết các ngành</div>
                  <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
              <div className="pb-4 md:pb-10 px-2 md:px-0">
                <img src="https://dhhp.edu.vn/admissions/cac-nganh-dao-tao.png" alt="IMG" className="w-full rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://dhhp.edu.vn/admissions/bg-line2.png)'
        }} className="bg-cover py-4 md:py-8 2xl:py-20">
          <div className="container py-4 mx-auto">
            <div className="md:flex md:py-10 items-center">
              <div className="md:w-2/5 flex justify-center relative">
                <img src="https://w.ladicdn.com/s400x400/5c7362c6c417ab07e5196b05/25-20240130175108-4r4cl.png" alt="IMG" className="absolute left-10 w-14 md:w-32 animate-bounce" style={{
                  animationDuration: '2s'
                }} />
                <img src="https://w.ladicdn.com/s450x400/5c7362c6c417ab07e5196b05/26-20240130175108-aehup.png" alt="IMG" className="absolute right-0 w-14 md:w-32 animate-bounce" style={{
                  animationDuration: '2s'
                }} />
                <img src="https://w.ladicdn.com/s400x450/5c7362c6c417ab07e5196b05/27-20240130175108-n3e1y.png" alt="IMG" className="absolute right-10 md:right-20 top-60 w-14 md:w-20 animate-spin" style={{
                  animationDuration: '2s'
                }} />
                <img src="https://dhhp.edu.vn/admissions/girl1.png" alt="IMG" className="md:w-[400px] w-64 mr-20" data-aos="fade-up" data-aos-duration="1000" />
              </div>
              <div className="md:w-3/5 md:text-lg">
                <div className="relative mb-2" data-aos="fade-up" data-aos-duration="1000">
                  <div className="flexitems-center">
                    <div style={{
                      backgroundImage: 'url(https://w.ladicdn.com/s600x400/5c7362c6c417ab07e5196b05/22-20240130175108-x4q3i.png)'
                    }} className="h-[60px] w-[325px] bg-no-repeat bg-left text-center md:flex items-center justify-center hidden">
                      <div className="text-2xl font-medium text-white">PHƯƠNG THỨC</div>
                    </div>
                    <div className="flex-1">
                      <img src="https://w.ladicdn.com/s600x500/5c7362c6c417ab07e5196b05/30-20240130175108-9r1ke.png" alt="IMG" className="absolute right-10 md:right-40 bottom-4 md:bottom-10 animated tada w-20 md:w-auto" />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <img src="https://w.ladicdn.com/s750x450/5c7362c6c417ab07e5196b05/24-20240130175108-qhoej.png" className="w-52 md:w-96" />
                    <div>
                      <img src="https://w.ladicdn.com/s550x400/5c7362c6c417ab07e5196b05/23-20240130175108-pyjde.png" className="w-28 md:w-52" />
                    </div>
                  </div>
                </div>
                <div className="md:px-0 px-2 drop-shadow">
                  <div className="bg-white rounded md:bg-transparent p-4 md:p-0">
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                      <div className="mb-1"><b>1. Đối với phương thức 1:</b> Xét tuyển kết quả thi tốt nghiệp THPT.</div>
                      <ul className="list-disc md:pl-10 pl-4">
                        <li className="mb-1">
                          Thời gian đăng ký, điều chỉnh nguyện vọng xét tuyển (không giới hạn số lần) từ ngày <b>18/07/2024</b> đến <b>17h00 ngày 30/07/2024</b>.
                        </li>
                        <li className="mb-1">
                          Thí sinh đăng ký trực tuyến trên Cổng dịch vụ công quốc gia hoặc Hệ thống (<a href="https://thisinh.thithptquocgia.edu.vn/" className="font-bold text-blue-700">Tại Đây</a>) theo hướng dẫn của Bộ GDĐT.
                        </li>
                      </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                      <div className="mb-1"><b>2. Đối với phương thức 2:</b> Xét tuyển kết quả học tập THPT</div>
                      <ul className="list-disc md:pl-10 pl-4">
                        <li className="mb-1">
                          Thời gian tiếp nhận hồ sơ xét tuyển: từ ngày <b>07/06/2024</b> đến <b>17h00 ngày 30/07/2024</b>;
                        </li>
                        <li className="mb-1">
                          Thí sinh đăng ký trực tuyến tại địa chỉ http://dkxt.dhhp.edu.vn hoặc nộp trực tiếp tại phòng Khảo thí & ĐBCL, nhà C2, Trường Đại học Hải Phòng hoặc gửi chuyển phát qua bưu điện.
                        </li>
                      </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                      <div className="mb-1"><b>3. Đối với phương thức 3</b>: Xét tuyển kết hợp giữa Chứng chỉ quốc tế (IELTS, TOEFL iBT, TOEIC, Tiếng Trung HSK, <span className="text-red-500">Tiếng Nhật JNPT</span>) và kết quả thi tốt nghiệp THPT hoặc kết quả học tập THPT năm lớp 11 và HK1 năm lớp 12</div>
                      <ul className="list-disc md:pl-10 pl-4">
                        <li className="mb-1">
                          Thời gian tiếp nhận hồ sơ xét tuyển: từ ngày <b>07/06/2024</b> đến <b>17h00 ngày 30/07/2024</b>.
                        </li>
                        <li className="mb-1">
                          Thí sinh có thể nộp trực tiếp hoặc gửi chuyển phát qua bưu điện.
                        </li>
                      </ul>
                    </div>
                    <div className="rounded mb-2" data-aos="fade-up" data-aos-duration="1000">
                      <div className="mb-1"><b>4. Đối với phương thức 4</b>: Xét kết quả thi đánh giá năng lực, đánh giá tư duy năm 2024 do ĐHQG Hà Nội, ĐHQG thành phố HCM, ĐH Bách Khoa Hà Nội tổ chức.</div>
                      <ul className="list-disc md:pl-10 pl-4">
                        <li className="mb-1">
                          Thời gian tiếp nhận hồ sơ xét tuyển: từ ngày <b>07/06/2024</b> đến <b>17h00 ngày 30/07/2024</b>.
                        </li>
                        <li className="mb-1">
                          Thí sinh có thể nộp trực tiếp hoặc gửi chuyển phát qua bưu điện.
                        </li>
                      </ul></div>
                    <div className="rounded mb-2" data-aos="fade-up" data-aos-duration="1000">
                      <div className="mb-1"><b>5. Đối với phương thức 5</b>: Xét tuyển thẳng theo quy định của Bộ GDĐT</div>
                      <div className="mb-1">Điều kiện đăng ký xét tuyển: thí sinh phải đáp ứng những quy định tại Điều 8 Quy chế tuyển sinh ban hành kèm theo Thông tư số 08/2022/TT-BGDĐT ngày 06/6/2022.</div>
                      <ul className="list-disc md:pl-10 pl-4">
                        <li className="mb-1">
                          Thời gian nộp hồ sơ đăng ký xét tuyển thẳng: trước <b>17h00</b> ngày <b>30/06/2024</b>.
                        </li>
                        <li className="mb-1">
                          Thí sinh có thể nộp trực tiếp hoặc gửi chuyển phát qua bưu điện.
                        </li>
                      </ul>
                    </div>
                    <div className="rounded" data-aos="fade-up" data-aos-duration="1000">
                      <div className="mb-1"><b>Hồ sơ đăng ký dự thi môn Năng khiếu</b></div>
                      <ul className="list-disc md:pl-10 pl-4">
                        <li className="mb-1">
                          Thời gian tiếp nhận hồ sơ đăng ký dự thi: từ ngày <b>07/06/2024</b> đến <b>17h00</b> ngày <b>25/07/2024</b>
                        </li>
                        <li className="mb-1">
                          Thí sinh có thể nộp trực tiếp hoặc gửi chuyển phát qua bưu điện.
                        </li>
                        <li className="mb-1">
                          Thí sinh sử dụng kết quả thi năng khiếu năm 2024 của các cơ sở đào tạo khác phải nộp giấy chứng nhận kết quả thi năng khiếu (bản chính) về Trường trước <b>17h00</b> ngày <b>30/07/2024</b>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x727/5c7362c6c417ab07e5196b05/727-d-20240130180038-jenam.png)'
        }}>
          <div className="container mx-auto py-4 md:py-10 px-2 md:px-0  drop-shadow">
            <div className="md:flex gap-2 md:gap-4 2xl:gap-10 items-center">
              <div className="md:w-2/3 mb-4">
                <div className="text-xl text-white md:text-3xl font-bold mb-4 md:mb-8" data-aos="fade-up" data-aos-duration="1000">HỒ SƠ XÉT TUYỂN HỌC BẠ</div>
                <div className="grid md:grid-cols-2 gap-2 md:gap-4 mb-4 text-sm">
                  <div className="p-4 md:p-6 rounded-xl bg-white min-h-40 transition duration-300" data-aos="fade-up" data-aos-duration="1000">
                    <div className="font-medium text-base mb-1">1. Xét kết quả thi tốt nghiệp THPT năm 2024</div>
                    Thí sinh phải đăng ký nguyện vọng trên cổng Tuyển sinh quốc gia: <a href="https://thisinh.thitotnghiepthpt.edu.vn/" className="text-blue-500">https://thisinh.thitotnghiepthpt.edu.vn/</a> từ ngày <b>18/7/2024</b> đến <b>30/7/2024</b>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-red-600 text-white transition duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className=" mb-1"><span className="text-base font-medium">2. Xét tuyển kết hợp</span> Chứng chỉ quốc tế và kết quả thi tốt nghiệp THPT hoặc kết quả học tập THPT năm lớp 11 và HK1 năm lớp 12</div>
                    -  Phiếu đăng ký xét tuyển theo mẫu (tải tại <a href="http://dkxt.dhhp.edu.vn">ĐÂY</a>);<br />
                    -  Bản sao CCCD, chứng chỉ quốc tế, học bạ THPT (công chứng)<br />
                    -  Bản sao bằng tốt nghiệp THPT (nếu có);<br />
                    -  Giấy chứng nhận ưu tiên (nếu có ưu tiên).<br />
                    -  Lệ phí xét tuyển: 20.000 đồng/1 nguyện vọng.<br />
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-red-600 text-white transition duration-300" data-aos="fade-up" data-aos-duration="1000">
                    <div className="mb-1"><span className="text-base font-medium">3. Xét tuyển kết hợp giữa Chứng chỉ quốc tế</span> (IELTS, TOEFL iBT, TOEIC, Tiếng Trung HSK) và kết quả thi tốt nghiệp THPT hoặc kết quả học tập THPT năm lớp 11 và HK1 năm lớp 12</div>
                    -  Chứng chỉ quốc tế (bản sao công chứng)<br />
                    -  Phiếu đăng ký (theo MẪU)<br />
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-white min-h-40 transition duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="mb-1"><span className="font-medium text-base">4. Xét kết quả thi Đánh giá năng lực hoặc đánh giá tư duy</span> năm 2024 do Đại học Quốc gia Hà Nội, Đại học Quốc gia Thành phố Hồ Chí Minh, Đại học Bách Khoa Hà Nội tổ chức</div>
                    -  Giấy chứng nhận kết quả thi (bản sao công chứng)<br />
                    -  Phiếu đăng ký (theo MẪU)<br />
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-white min-h-40 transition duration-300" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="font-medium text-base mb-1">5: Xét tuyển thẳng theo quy định của Bộ GD&ĐT</div>
                    -  Giấy chứng nhận đạt giải (bản sao công chứng)<br />
                    -  Phiếu đăng ký (theo MẪU)<br />
                  </div>
                  <div className="p-4 md:p-6 rounded-xl bg-red-600 text-white transition duration-300" data-aos="fade-up" data-aos-duration="1000">
                    <div className="text-base font-medium mb-1">6. Hồ sơ đăng ký dự thi môn Năng khiếu</div>
                    -  Phiếu đăng ký dự thi theo mẫu (theo MẪU);<br />
                    -  Căn cước công dân (bản sao công chứng)<br />
                    -  03 ảnh 4x6;<br />
                    -  Lệ phí thi: 300.000 đồng.<br />
                    * Thời gian nhận đăng ký từ ngày <b>07/6/2024</b> đến <b>25/7/2024</b>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="mb-4 flex justify-center">
                  <img src="https://i.imgur.com/35B5fuU.png" alt="IMG" className="md:w-[500px] w-80" data-aos="fade-up" data-aos-duration="1000" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="text-white mb-2 font-bold text-xl">
                    ĐỊA CHỈ NHẬN HỒ SƠ
                  </div>
                  <div className="text-white mb-1">
                    Phòng Khảo thí và Đảm bảo chất lượng - Nhà C2, Trường Đại học Hải Phòng, số 171, đường Phan Đăng Lưu, quận Kiến An, thành phố Hải Phòng.
                  </div>
                  <div className="text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={faHome} />Số 171 Phan Đăng Lưu, Kiến An, Hải Phòng
                  </div>
                  <div className="text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} />0398.171.171 - 0773.171.171
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x962/5c7362c6c417ab07e5196b05/980-d-20240130180951-tb20q.png)'
        }} className="py-4 md:py-20 bg-cover" id="method">
          <div className="container mx-auto py-4 md:py-10 px-2 md:px-0">
            <Heading1 center title="Chế độ chính sách với sinh viên" white />
            <div className="bg-white rounded-xl mx-auto border-2 border-white bg-cover max-w-[1000px]">
              <div className="bg-red-500 max-w-[1000px] mx-auto rounded-xl" data-aos="fade-up" data-aos-duration="1000" >
                <div className="p-4 md:p-10">
                  <div className="text-white text-sm md:text-base">
                    <div className="mb-2">
                      Xem người học là trung tâm của mọi hoạt động; Bên cạnh chú trọng đầu tư về chất lượng đào tạo cùng dịch vụ trải nghiệm sinh viên sống động, ĐHHP luôn tạo điều kiện tốt nhất cho người học, trong đó có việc cung cấp đầy đủ, kịp thời cho sinh viên thông tin về chính sách học bổng.
                    </div>
                    <div className="mb-2">
                      Chính sách học bổng nhằm khuyến khích sinh viên đạt thành tích cao trong việc học cũng như tạo điều kiện cho sinh viên có hoàn cảnh khó khăn tiếp tục theo đuổi ước mơ của mình từ giảng đường đại học.
                    </div>
                    <div className="mb-2">Hàng năm, Trường ĐHHP dành hàng chục tỉ đồng cho những loại hình học bổng sau:</div>
                  </div>
                  <div className="text-white md:text-xl font-bold mb-2 uppercase">1. Học bổng Khuyến khích học tập</div>
                  <div className="p-4 rounded bg-white mb-4 text-sm md:text-base">
                    Tỉ lệ sinh viên đạt học bổng chiếm tỷ lệ từ 5% đến 8% trên tổng số hơn 10.000 sinh viên chính quy toàn trường; trị giá học bổng từ 100% đến 120% mức học phí từng ngành đạo tạo, chương trình đào tạo.
                  </div>

                  <div className="text-white md:text-xl font-bold mb-2 uppercase">2. Học bổng tài trợ từ các tổ chức, doanh nghiệp theo chương trình &quot;Ươm mầm tài năng Đại học Hải Phòng&quot;.</div>
                  <div className="p-4 bg-white mb-4 text-sm md:text-base">
                    Nhà trường liên kết chặt chẽ với các doanh nghiệp, tổ chức trong và ngoài nước hàng năm dành tặng cho sinh viên nhà trường hàng trăm triệu đồng mỗi năm như học bổng của Ngân hàng TMCP Vietinbank, Vietcombank; Tổ chức Tầm nhìn thế giới World Vision; Tập đoàn LG; Quỹ Giáo dục Quốc tế Hàn Quốc Woonjung; Công ty TNHH Pegatron,… dành tặng cho sinh viên trúng tuyển đạt thủ khoa đầu ngành, sinh viên đạt thành tích cao tại các cuộc thi cấp quốc gia và quốc tế trúng tuyển vào trường, những sinh viên đạt thành tích cao trong học tập và rèn luyện, sinh viên có hoàn cảnh khó khăn vươn lên trong học tập.
                  </div>
                  <div className="text-white md:text-xl font-bold mb-2 uppercase">3. Học bổng tài năng:</div>
                  <div className="bg-white p-4 mb-4 text-sm md:text-base rounded">
                    Đặc biệt, trong năm học 2024 - 2025, Nhà trường liên kết với các doanh nghiệp trên địa bàn thành phố dành các suất học bổng có giá trị cao cho các sinh viên có thành tích học tập giỏi, xuất sắc vào học chương trình chất lượng cao tại trường. Bên cạnh đó, sinh viên chương trình CLC được tạo điều kiện về thực tập thực hành tại các Doanh nghiệp, tổ chức tài trợ và có chính sách ưu tiên trong tuyển dụng.

                  </div>
                  <div className="text-white md:text-xl font-bold mb-2 uppercase">4. Các chính sách hỗ trợ khác</div>

                  <div className="p-4 bg-white rounded text-sm md:text-base">
                    <div className="font-semibold mb-2 text-lg">Nhà trường đảm bảo thực hiện đầy đủ các chính sách cho sinh viên theo các quy định của nhà nước, cụ thể:</div>
                    <ul className="list-disc md:pl-10 pl-4">
                      <li>
                        Chính sách hỗ trợ học phí và chi phí sinh hoạt cho sinh viên sư phạm theo Nghị định 116/2020/NĐ-CP. Mỗi sinh viên được hỗ trợ học phí bằng mức thu học phí của cơ sở đào tạo và được hỗ trợ chi phí học tập 36,3 tr đồng/năm học.
                      </li>
                      <li>
                        Chính sách miễn, giảm học phí cho sinh viên đối tượng chính sách theo Nghị định 81/2021/NĐ-CP;
                      </li>
                      <li>
                        Chính sách hỗ trợ học tập đối với sinh viên dân tộc thiểu số rất ít người theo Nghị định 57/2017/NĐ-CP;
                      </li>
                      <li>
                        Chính sách hỗ trợ chi phí học tập đối với sinh viên là người dân tộc thiểu số thuộc hộ nghèo, cận nghèo theo Quyết định số 66/2013/QĐ-TTg.
                      </li>
                      <li>
                        Chính sách hỗ trợ cho sinh viên vay vốn tín dụng tại Ngân hàng chính sách xã hội địa phương theo Quyết định số 157/2007/QĐ-TTg.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-900 rounded-b-xl p-4"></div>
              </div>
            </div>
          </div>
        </div>
        <Infrastructure />
        <EventComponent />
        {/* <div style={{
          backgroundImage: 'url(https://w.ladicdn.com/s1440x1371/5c7362c6c417ab07e5196b05/1289-20240131074326-mllq3.png)'
        }} className="py-4 md:py-10 2xl:py-20 px-2 md:px-0 bg-cover">
          <Heading1 title="Phương thức tuyển sinh" center />
          <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1000">
            <img src="https://dhhp.edu.vn/admissions/phuong-thuc-tuyen-sinh.png" alt="IMG" className="max-w-[1000px] w-full rounded-lg bg-shadow-lg" />
          </div>
        </div> */}
      </main>
      {/* <div className="bg-stone-100">
        <div className="container mx-auto py-4 md:py-10">

        </div>
      </div> */}
      {/* <Testimonial /> */}
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
