import React, { useEffect, useState } from "react";
import "./home.css";
import { MdErrorOutline } from "react-icons/md";
import axios from "axios";
import CircleSpinner from "../../components/loader/CircleSpinner";
import Slider from "../../components/slider/Slider";
import { baseUrl } from "../../app/baseurl";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaCity, FaCloud } from "react-icons/fa";
import { FaTreeCity } from "react-icons/fa6";
import {
  MdMeetingRoom,
  MdOutlineRestaurant,
  MdLocationCity,
} from "react-icons/md";
import { GiStripedSun } from "react-icons/gi";

export default function Home() {
  const navigate = useNavigate();
  const [advertisements, setAdvertisements] = useState([]);
  const [adEerror, setAdError] = useState("");
  const [slides, setSlides] = useState(null);
  const [slidesEerror, setSlidesError] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/advertisements`)
      .then((res) => {
        setAdvertisements(res.data);
        setAdError("");
      })
      .catch((err) => setAdError(err.message));

    axios
      .get(`${baseUrl}/slides`)
      .then((res) => {
        setSlides(res.data);
        setSlidesError("");
      })
      .catch((err) => setSlidesError(err.message));
  }, []);

  return (
    <div className="home-container">
      <aside className="sidebar-container">
        <h2 className="main-title">اینجا محل تبلیغ شماست</h2>

        {adEerror && (
          <div className="error">
            <MdErrorOutline />
            <p>{adEerror}</p>
          </div>
        )}

        {!adEerror && !advertisements && <CircleSpinner />}

        {advertisements &&
          advertisements.map((ad) => (
            <div key={ad.id}>
              <h4 className="title">{ad.title}</h4>
              <div className="advertisement">
                <div>
                  <img src={ad.image} alt="advertisement" className="advertisement-image" />
                </div>
                <p>{ad.body}</p>
              </div>
            </div>
          ))}
      </aside>

      <section className="slides-wrapper">
        <div className="report-container">
          <div className="report-item">
            <div>
              <FaCity className="report-container-icon" />
              <FaTreeCity className="report-container-icon" />
              <MdLocationCity className="report-container-icon" />
              <FaCloud className="report-container-icon" />
              <FaCloud className="report-container-icon" />
              <GiStripedSun className="report-container-icon" />
            </div>

            <p className="report-title">تعداد مهمانهای هتل</p>
            <FaUsers className="report-icon" />
            <p className="report-number">765</p>
          </div>
          <div className="report-item">
            <p className="report-title">ظرفیت اتاق های هتل</p>
            <MdMeetingRoom className="report-icon" />
            <p className="report-number">87</p>
          </div>
          <div className="report-item">
            <p className="report-title">ظرفیت رستوران هتل</p>
            <MdOutlineRestaurant className="report-icon" />
            <p className="report-number">33</p>
          </div>
        </div>

        {slidesEerror && (
          <div className="error">
            <MdErrorOutline />
            <p>{slidesEerror}</p>
          </div>
        )}

        {!slidesEerror && !slides && <CircleSpinner />}

        {slides && (
          <div className="slides-container">
            <h2 className="main-title">
              هتل درسمن با بهترین امکانات آسایش شمارا فراهم خواهد کرد
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
            <Slider slides={slides.rooms} />

            <div className="slider-footer-container">
              <button
                type="button"
                className="btn btn-gold slider-footer-btn"
                onClick={() => navigate("/roomSearch")}
              >
                رزرو اتاق
              </button>
            </div>
            <h2 className="main-title">
              با رستوران درسمن در محیطی آرام و دلنشین خاطرات بیاد ماندنی بسازید
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
            <Slider slides={slides.restaurant} />
            <div className="slider-footer-container">
              <button
                type="button"
                className="btn btn-gold slider-footer-btn"
                onClick={() => navigate("/foodSearch")}
              >
                سفارش غذا
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
