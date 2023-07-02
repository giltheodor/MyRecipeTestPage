import classes from "./App.module.css";
import Header from "./components/Header";

import { Helmet } from "react-helmet";

import recipe from "./data.json";

function App() {
  console.log(recipe.name);
  return (
    <div className={classes.app}>
      <Helmet>
        <title>My recipe</title>
        <script>
          {`(function (d, s, id, a) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://widgets.instacart.com/widget-bundle-v2.js";
                    js.async = true;
                    js.dataset.source_origin = "affiliate_hub";
                    fjs.parentNode.insertBefore(js, fjs);
                })
                (document, "script", "standard-instacart-widget-v1");`}
        </script>
        <script type="application/ld+json">{JSON.stringify(recipe)}</script>
      </Helmet>
      <Header />
      <div className={classes.centered}>
        <h2 className={classes.title}>{recipe.name}</h2>
        <ul>
          {recipe.recipeIngredient.map((el) => (
            <li key={Math.random()} className={classes.item}>
              {el}
            </li>
          ))}
        </ul>
        <div
          id="shop-with-instacart-v1"
          data-affiliate_id="3107"
          data-source_origin="affiliate_hub"
          data-affiliate_platform="recipe_widget"
        />
      </div>
    </div>
  );
}

export default App;
