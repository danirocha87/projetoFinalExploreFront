import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonPageNewDish, ButtonTextViewDish, Container, Form } from "./styles";

import { ArrowUUpLeft, UploadSimple } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Ingredient } from "../../components/Ingredient";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { api } from "../../services/api";



export function EditDish() {
  const [name, setName] = useState("")
  const [image, setImage] = useState(null)
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const params = useParams();

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddIngredients() {
    //Impedir ingredients duplicados
    if (!ingredients.includes(newIngredient) && newIngredient.length > 0) {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
    } else {
      return alert("Campo vazio ou duplicado!");
    }
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleUpdateDishes() {
    if (!image) {
      return alert("Coloca ai uma imagem pra nós, pra saber se eu comeria ou não esse prato.")
    }

    if (!name) {
      return alert("Mermão, não tem como cadastrar a receita sem um nome. Digita um ai pra nós.")
    }

    if (!category) {
      return alert("Mano, assim... Preciso classifcar ela em alguma categoria, inventa uma ai que da bom.")
    }

    if (!ingredients) {
      return alert("Olha... Assim... Sabe... Preciso de ingredientes pra criar a receita né... preenche ai se não num vou deixar você concluir.")
    }

    if (!price) {
      return alert("Vai ficar de grátis? se não, coloca um preço ai pra nós!")
    }

    if (!description) {
      return alert("Essa descrição é obrigatória. Afinal de contas... como vou saber algo sobre a receita sem uma observação ou descrição?!")
    }

    console.log({
      name,
      image,
      category,
      description,
      price,
      ingredients
    })

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    const formData = new FormData()
    formData.append("image", image)
    formData.append("name", name)
    formData.append("description", description)
    formData.append("category", category)
    formData.append("price", price)


    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api.put(`/dishes/${params.id}`, formData);

    alert("Prato atualizado com sucesso! 👌")

    handleBack()
  }

  async function handleDelete() {
    try {
      alert("Desejas mesmo excluir este prato?")
      await api.delete(`/dishes/${params.id}`)
      navigate('/')
    } catch (error) {
      alert.error("Fala ao remover o prato, contate o desenvolvedor...")
    }
  }


  useEffect(() => {
    async function fetchDish() {
      const res = await api.get(`/dishes/${params.id}`);

      const { name, image, description, category, price, ingredients } =
        res.data;
      console.log(image)

      const ingredientList = ingredients.map((ingredient) => ingredient.name)

      setName(name);
      setImage(image);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredientList);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonTextViewDish
              icon={ArrowUUpLeft}
              title="Voltar"
              onClick={handleBack}
            />

            <h1>Novo Prato</h1>
          </header>

          <section className="col-1">

            <label htmlFor="image">
              Imagem do prato

              <div className="image">
                <UploadSimple size={24} />
                <span>{image ? "Alterar a Imagem" : "Selecione a imagem"}</span>
                <input
                  id="image"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </label>

            <label htmlFor="name">
              Nome
              <Input
                id="name"
                type="text"
                placeholder="Ex: Salada Ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="category">
              Categoria

              <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                <option value={category}>{category}</option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </label>
          </section>


          <section className="col-2">

            <label htmlFor="">
              Ingredients

              <div className="ingredients">
                {
                  ingredients.map((ingredient, index) => (
                    <Ingredient
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredients(ingredient)}
                    />
                  ))
                }

                <Ingredient
                  isNew
                  placeholder="Adicionar"
                  onChange={e => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredients}
                />

              </div>
            </label>


            <label htmlFor="price">
              Preço
              <Input
                id="price"
                value={price}
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </section>

          <label htmlFor="description">
            Descrição

            <TextArea
              id="description"
              defaultValue={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </Form>

        <div className="buttons">

          <ButtonPageNewDish
            title="Excluir"
            onClick={handleDelete}
          />

          <ButtonPageNewDish
            title="Salvar Alterações"
            onClick={handleUpdateDishes}
          />
        </div>
      </main>

      <Footer />
    </Container>
  )
}