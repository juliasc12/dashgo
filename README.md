<div align="center">

#
<b>DashGo.</b> é uma aplicação com interface declarativa e uncontrolled components form.<br> 
Também possui responsividade, gráficos dinâmicos e armazenamento de dados em cache.

</div>

## Layout

<img src="./assets/preview.gif">

## Sobre a aplicação

Foi utilizado interface declarativa do <b>Chakra UI </b> pela praticidade em criar designs (inclui responsividade através de breakpoints), código limpo e de fácil manutenção.

Para o formulário foi utilizado <b>React Hook Form</b>. A técnica de uncontrolled components se diz pelo valor da variável ser acessado somente quando necessário (não é guardado),
sendo assim, a informação passada por refs, forwardRef e funções como constantes e aero function.

Foi implementado o <b>Mirage</b> pra criação de uma API fictícia para ser consumida pela aplicação.

E utilizada a tecnologia <b>React Query</b> para entender mais sobre data fetching, cache local e estado dos dados (fresh, fetching, scale e inactive). 
Foi utilizado também as propriedades de prefetch de dados e mutations.

É importante lembrar que apesar da tech facilitar o fetching dos dados, ele não substitui a forma de obter os dados do backend, como axios ou fetch.

Foi criado a lógica de paginação do zero pelo mirage e do componente em si. E, por fim, feita a integração da tecnologia SSR do Next com o React Query.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Mirage](https://miragejs.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React Query](https://tanstack.com/query/v4/docs/overview)

## Inicializando ##

```bash
# Clonar
$ git clone https://github.com/juliasc12/dashgo

# Instalar dependencias
$ yarn install

# Executar
$ yarn dev

```

## Curiosidades

### <b>React Query substitui o Redux?</b><br>
- São duas coisas diferentes, o React Query é <b>server-state library</b>, isso significa que ele controla o estado da comunicação do frontend com o servidor.
Enquanto o Redux é <b>client-state library</b>, ou seja, controla o estado da aplicação pelo client, ou seja, tudo o que será alterado no client da aplicação.

<br>

### <b>O que muda com React Query?</b><br>
- O React Query consegue manter uma cópia dos dados para acesso imediato quando necessário. Porém, isso não evita requisições para a API, pois é utilizada a técnica de cache <b>stale while revalidate</b> que exibe sempre a versão mais atual dos dados, porém, pode ser uma versão obsoleta. Por isso sempre é feita a revalidação dos dados, para caso tenha tido alguma alteração ela seja exibida em tela. Outro comportamento é <b> revalidate on focus </b> que sempre será feita a revalidação ao retornar em tela caso a aplicação tenha ficado em segundo plano por um tempo. <br>
- É importante ressaltar que esses comportamentos são <b> altamente customizáveis </b> e, é possível desabilitar essas propriedades e modificar o tempo em que os dados serão considerados obsoletos.
