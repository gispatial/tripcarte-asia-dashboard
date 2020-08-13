<!-- =========================================================================================
	File Name: ECommerceWishList.vue
	Description: eCommerce Wish List Page
	----------------------------------------------------------------------------------------
	Item Name: Tripcarte.Asia Dashboard Management Portal
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
                    </template>
                </item-grid-view>

            </div>
        </div>

        <!-- IF NO ITEMS IN CART -->
        <vx-card title="You don't have any items in your wish list." v-else>
            <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Browse Shop</vs-button>
        </vx-card>
  </div>
</template>

<script>
const ItemGridView = () => import('./components/ItemGridView.vue')

export default {
    components: {
        ItemGridView
    },
    computed: {
        wishListitems() {
            return this.$store.state.eCommerce.wishList.slice().reverse();
        },
        isInCart() {
            return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
        },
        isInWishList() {
            return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
        },
    },
    methods: {
        removeItemFromWishList(item) {
            this.$store.dispatch('eCommerce/toggleItemInWishList', item)
        },
        cartButtonClicked(item) {
            if (this.isInCart(item.objectID)) this.$router.push('/apps/eCommerce/checkout').catch(() => {})
            else {
                this.additemInCart(item);
                this.removeItemFromWishList(item);
            }
        },
        additemInCart(item) {
            this.$store.dispatch('eCommerce/additemInCart', item)
        },
    }
}
</script>

<style lang="scss" scoped>
#ecommerce-wishlist-demo {
    .item-view-primary-action-btn {
        color: #2c2c2c !important;
        background-color: #f6f6f6;
        min-width: 50%;
    }

    .item-view-secondary-action-btn {
        min-width: 50%;
    }
}
</style>
