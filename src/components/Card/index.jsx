import { HeartStraight, Minus, Pencil, Plus } from "@phosphor-icons/react";
import { ButtonCard, Container } from "./styles";

import { useNavigate } from "react-router-dom";
import { ButtonText } from '../../components/ButtonText';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Card({ data, amount, ...rest }) {
  const { user } = useAuth()
  // console.log(data)

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/previewdish/${id}`);
  }

  return (
    <Container {...rest}>
      <div className="like">
        {
          user.isAdmin
            ? <ButtonText icon={Pencil} to={`/editdish/${data.id}`} />
            : <ButtonText icon={HeartStraight} />
        }
      </div>

      <img
        src={`${api.defaults.baseURL}/files/dishImage/${data.image}`}
        alt="Plate img"
        onClick={() => handleDetails(data.id)}
      />

      <h1>{data.name} &gt;</h1>

      <h3>{data.description}</h3>

      <span>R$ {data.price},00</span>

      {
        user.isAdmin
          ?
          null
          :
          <div className="bottom-card">
            <div className="amount">
              <ButtonText icon={Minus} />
              <p>{amount}</p>
              <ButtonText icon={Plus} />
            </div>

            <ButtonCard title="incluir" />
          </div>
      }
    </Container>
  )
}