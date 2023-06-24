import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Slider } from "../../components/Slider";
import { Container } from "./styles";

import CookiePng from '../../assets/cookie.png';

import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { api } from "../../services/api";

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')


  function handleOnChange(e) {
    if (window.location.pathname === "/") {
      setSearch(e.target.value)
    }
  }

  useEffect(() => {
    async function fetchDishes() {
      const res = await api.get(`/dishes?name=${search}`)
      console.log(res.data)
      setDishes(res.data)
    }

    fetchDishes()
  }, [search])


  // function handleEditDish(id) {
  //   navigate(`/editdish/${id}`)
  // }

  return (
    <Container>
      <Header
        onChange={handleOnChange}
      />

      <main>

        <div className="head">
          <img src={CookiePng} alt="" />


          <div className="text">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>


        {/* <Section title="Refeicoes">
          <Slider>
            {
              dishes.map(dish => {
                return (
                  <SwiperSlide
                    key={String(dish.id)}
                  >
                    <Card
                      data={dish}
                    />
                  </SwiperSlide>
                )
              }

              )
            }
          </Slider>
        </Section> */}

        {
          dishes.filter((dish) => dish.category === "Refeições").length > 0 && (
            <Section title="Refeições">
              <Slider>
                {
                  dishes.filter((dish) => dish.category === "Refeições").map((meal, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        data={meal}
                      />
                    </SwiperSlide>
                  ))
                }
              </Slider>
            </Section>
          )
        }

        {
          dishes.filter((dish) => dish.category === "Sobremesa").length > 0 && (
            <Section title="Sobremesa">
              <Slider>
                {
                  dishes.filter((dish) => dish.category === "Sobremesa").map((meal, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        data={meal}
                      />
                    </SwiperSlide>
                  ))
                }
              </Slider>
            </Section>
          )
        }

        {
          dishes.filter((dish) => dish.category === "Bebidas").length > 0 && (
            <Section title="Bebidas">
              <Slider>
                {
                  dishes.filter((dish) => dish.category === "Bebidas").map((meal, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        data={meal}
                      />
                    </SwiperSlide>
                  ))
                }
              </Slider>
            </Section>
          )
        }



      </main>

      <Footer />
    </Container >
  )
}