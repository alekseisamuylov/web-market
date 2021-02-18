<template>
  <div class="showcase">
    <product-category
      v-for="productCategory in products"
      :key="'category-' + productCategory.groupId"
      :product-category="productCategory"
    />
  </div>
</template>

<script>
  import ProductCategory from "@/components/ProductCategory";

  export default {
    name: "Showcase",

    components: {
      ProductCategory
    },

    methods: {
      parseData(data) {
        const groupIDs = [];
        const groups = [];

        data.forEach(element => {
          const elementGroupId = element.G;

          if (!groupIDs.includes(elementGroupId)) {
            groupIDs.push(elementGroupId);

            const group = {
              groupName: this.dictionaryNames[elementGroupId].G,
              groupId: elementGroupId,
              groupProducts: []
            };

            const groupData = data.filter(element => element.G === elementGroupId);
            groupData.forEach(element => {
              group.groupProducts.push({
                costUSD: element.C,
                productId: element.T,
                left: element.P,
                name: this.dictionaryNames[elementGroupId].B[element.T].N
              })
            });

            groups.push(group);
          }
        });

        return groups;
      }
    },

    computed: {
      dictionaryNames() {
        return this.$store.state.dictionary.names;
      },

      products() {
        const goods = this.$store.state.products.data.Value.Goods;
        return this.parseData(goods);
      }
    }
  }
</script>

<style scoped>
  .showcase {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 10px;
    width: 60%;
  }

</style>