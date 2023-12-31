import classes from "./App.module.css";
import Header from "./components/Header";

import { Helmet } from "react-helmet";

import recipe from "./data.json";

function App() {
  return (
    <div className={classes.app}>
      <Helmet>
        <title>My recipe</title>
        <script>
          {`(function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) { return; } js = d.createElement(s); js.id = id; js.src = "https://widgets.instacart.com/widget-bundle.js"; js.async = true; fjs.parentNode.insertBefore(js, fjs); })(document, "script", "standard-instacart-widget-v1")`}
        </script>
        <script type="application/ld+json">{JSON.stringify(recipe)}</script>
      </Helmet>
      <Header data={recipe} />
      <div className={classes.centered}>
        <h2 className={classes.title}>{recipe.name}</h2>

        <ul>
          {recipe.recipeIngredient.map((el) => (
            <li key={Math.random()} className={classes.item}>
              {el}
            </li>
          ))}
        </ul>
        <div id="shop-with-instacart-v1" />
        {/*<div*/}
        {/*  id="shop-with-instacart-v1"*/}
        {/*  data-affiliate_id="3107"*/}
        {/*  data-source_origin="affiliate_hub"*/}
        {/*  data-affiliate_platform="recipe_widget"*/}
        {/*/>*/}
      </div>
    </div>
  );
}

export default App;

//
//  {
//    "@context": "http://schema.org/",
//    "@type": "Recipe",
//    "mainEntityOfPage": "https://food52.com/recipes/12782-quick-pickled-cucumber-melon-salad",
//    "name": "Quick-Pickled Cucumber-Melon Salad",
//    "image": [
//      "https://images.food52.com/1PXSKutGDe2Y2mIAvcKwP7YSXO8=/1200x1200/c9138234-a515-40ea-9d52-3aed7797791a--062811F_271.JPG",
//      "https://images.food52.com/E91Ta_yd5iG-3zuVquLJ7ok4PMw=/1200x900/c9138234-a515-40ea-9d52-3aed7797791a--062811F_271.JPG",
//      "https://images.food52.com/qT1CUUS5_6qd2iruPRJSCYoo148=/1200x675/c9138234-a515-40ea-9d52-3aed7797791a--062811F_271.JPG"
//    ],
//    "recipeCategory": "Appetizer",
//    "recipeCuisine": "Greek",
//    "author": {
//      "@type": "Person",
//      "name": "MeghanVK",
//      "url": "https://food52.com/users/22746-meghanvk"
//    },
//    "dateModified": "2019-08-20 10:48:17 -0400",
//    "datePublished": "2011-06-23 08:31:12 -0400",
//    "description": "For this cucumber melon salad recipe, it truly is quick pickling. Toss cucumber and melon in a few spoonfuls of salt and sugar wait 10 to 20 minutes--done!",
//    "recipeYield": "Makes 6 cups",
//    "prepTime": "PT0H0M",
//    "cookTime": "PT0H0M",
//    "recipeInstructions": [[{"@type":"HowToStep","text":"In a bowl, mix together the cucumbers and melon.  Sprinkle over with the sugar and salt.  The salad will begin to expel liquid almost immediately.  Let sit 10-20 minutes and drain well.  Return to the fridge until ready to serve."},{"@type":"HowToStep","text":"Before your picnic/casual lunch/classy dinner party, drain the salad again and remove to a serving bowl.  Add a grind of black pepper and sprinkle over the prosciutto or feta (using both will add too much salt; not recommended).  Spoon into bowls or eat straight from the serving dish with your fingers, trying to keep the cucumber-melon juice off your chin."}]],
//    "recipeIngredient": ["4  Kirby cucumbers, peeled and sliced 1/2 inch thin","3 cups sweet melon, cubed","2 tablespoons plus two teaspoons granulated sugar","1 tablespoon salt"," black pepper, to taste","2  slices high-quality prosciutto, cut into thin ribbons OR:","1/2 cup crumbled feta cheese"],
//    "commentCount": 29,
//    "aggregateRating": {
//      "ratingCount": "3",
//      "ratingValue": "4.33333333333333"
//    },
//    "keywords": "Salad, Melon, Prosciutto, Make Ahead, Serves a Crowd, Summer, Vegetable, Pickle &amp; Preserve, Cucumber",
//    "isAccessibleForFree": "True",
//    "hasPart": {
//      "@type": "WebPageElement",
//      "isAccessibleForFree": "True",
//      "cssSelector": ".recipe-gate"
//    },
//    "publisher": {
//      "@type": "Organization",
//      "name": "Food52",
//      "logo": "https://food52.com/assets/logo-food52.png",
//      "url": "https://food52.com/",
//      "sameAs": [
//        "https://www.facebook.com/food52",
//        "https://www.instagram.com/Food52/",
//        "https://twitter.com/Food52",
//        "https://www.pinterest.com/food52/",
//        "https://www.youtube.com/channel/UCfFI8jIjvIApUACJ3qjax2w"
//      ]
//    }
//  }
