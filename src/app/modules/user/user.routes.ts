import { Routes } from "@angular/router";
import { UserLayoutComponent } from "../../layouts/user-layout/user-layout.component";
import { PRODUCT_ROUTES } from "./products/products.routes";
import { CART_ROUTES } from "./Cart/carts.routes";
import { BRANDS_ROUTES } from "./Brands/brands.routes";
import { HOME_ROUTES } from "./home/home.routes";
import { WISHLIST_ROUTES } from "./wishlist/wishlist.routes";
import { ORDER_ROUTES } from "./orders/Orders.routes";
import { ALLORDER_ROUTES } from "./orders/pages/alloreders/alloreders.route";


export const USER_ROUTES: Routes=[

    {
        
        path:'',component:UserLayoutComponent,
        children:[
            ...HOME_ROUTES,
            ...PRODUCT_ROUTES,
            ...CART_ROUTES,
            ...BRANDS_ROUTES,
            ...WISHLIST_ROUTES,
            ...ORDER_ROUTES,
            ...ALLORDER_ROUTES
                        

        ]

    }
]






