<!-- =========================================================================================
    File Name: TablePagination.vue
    Description: Add pagination to table for long data
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: TripcarteAsia
    Author URL: http://www.tripcarte.asia/
========================================================================================== -->


<template>
    <vx-card title="Order">

        <br>

        <vs-table max-items="3" pagination :data="users">
            <template slot="thead">
            <vs-th>Order ID</vs-th>
                <vs-th>Items</vs-th>
                <vs-th>Customer</vs-th>
                <vs-th>Quantity</vs-th>
                <vs-th>Selected Date</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].email">
                        {{data[indextr].email}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].website}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].id}}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>

        <template slot="codeContainer">
&lt;template lang=&quot;html&quot;&gt;
  &lt;div&gt;
    &lt;vs-table max-items=&quot;3&quot; pagination :data=&quot;users&quot;&gt;

      &lt;template slot=&quot;thead&quot;&gt;
        &lt;vs-th&gt;Email&lt;/vs-th&gt;
        &lt;vs-th&gt;Name&lt;/vs-th&gt;
        &lt;vs-th&gt;Website&lt;/vs-th&gt;
        &lt;vs-th&gt;Nro&lt;/vs-th&gt;
      &lt;/template&gt;

      &lt;template slot-scope=&quot;{data}&quot;&gt;
        &lt;vs-tr :key=&quot;indextr&quot; v-for=&quot;(tr, indextr) in data&quot;&gt;

          &lt;vs-td :data=&quot;data[indextr].email&quot;&gt;
            {{ "\{\{ data[indextr].email \}\}" }}
          &lt;/vs-td&gt;

          &lt;vs-td :data=&quot;data[indextr].username&quot;&gt;
            {{ "\{\{ data[indextr].username \}\}" }}
          &lt;/vs-td&gt;

          &lt;vs-td :data=&quot;data[indextr].id&quot;&gt;
            {{ "\{\{ data[indextr].website \}\}" }}
          &lt;/vs-td&gt;

          &lt;vs-td :data=&quot;data[indextr].id&quot;&gt;
            {{ "\{\{ data[indextr].id \}\}" }}
          &lt;/vs-td&gt;

        &lt;/vs-tr&gt;
      &lt;/template&gt;
    &lt;/vs-table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    users: [
      {
        &quot;id&quot;: 1,
        &quot;name&quot;: &quot;Leanne Graham&quot;,
        &quot;username&quot;: &quot;Bret&quot;,
        &quot;email&quot;: &quot;Sincere@april.biz&quot;,
        &quot;website&quot;: &quot;hildegard.org&quot;,
      },
      {
        &quot;id&quot;: 2,
        &quot;name&quot;: &quot;Ervin Howell&quot;,
        &quot;username&quot;: &quot;Antonette&quot;,
        &quot;email&quot;: &quot;Shanna@melissa.tv&quot;,
        &quot;website&quot;: &quot;anastasia.net&quot;,
      },
      {
        &quot;id&quot;: 3,
        &quot;name&quot;: &quot;Clementine Bauch&quot;,
        &quot;username&quot;: &quot;Samantha&quot;,
        &quot;email&quot;: &quot;Nathan@yesenia.net&quot;,
        &quot;website&quot;: &quot;ramiro.info&quot;,
      },
      {
        &quot;id&quot;: 4,
        &quot;name&quot;: &quot;Patricia Lebsack&quot;,
        &quot;username&quot;: &quot;Karianne&quot;,
        &quot;email&quot;: &quot;Julianne.OConner@kory.org&quot;,
        &quot;website&quot;: &quot;kale.biz&quot;,
      },
      {
        &quot;id&quot;: 5,
        &quot;name&quot;: &quot;Chelsey Dietrich&quot;,
        &quot;username&quot;: &quot;Kamren&quot;,
        &quot;email&quot;: &quot;Lucio_Hettinger@annie.ca&quot;,
        &quot;website&quot;: &quot;demarco.info&quot;,
      },
      {
        &quot;id&quot;: 6,
        &quot;name&quot;: &quot;Mrs. Dennis Schulist&quot;,
        &quot;username&quot;: &quot;Leopoldo_Corkery&quot;,
        &quot;email&quot;: &quot;Karley_Dach@jasper.info&quot;,
        &quot;website&quot;: &quot;ola.org&quot;,
      },
      {
        &quot;id&quot;: 7,
        &quot;name&quot;: &quot;Kurtis Weissnat&quot;,
        &quot;username&quot;: &quot;Elwyn.Skiles&quot;,
        &quot;email&quot;: &quot;Telly.Hoeger@billy.biz&quot;,
        &quot;website&quot;: &quot;elvis.io&quot;,
      },
      {
        &quot;id&quot;: 8,
        &quot;name&quot;: &quot;Nicholas Runolfsdottir V&quot;,
        &quot;username&quot;: &quot;Maxime_Nienow&quot;,
        &quot;email&quot;: &quot;Sherwood@rosamond.me&quot;,
        &quot;website&quot;: &quot;jacynthe.com&quot;,
      },
      {
        &quot;id&quot;: 9,
        &quot;name&quot;: &quot;Glenna Reichert&quot;,
        &quot;username&quot;: &quot;Delphine&quot;,
        &quot;email&quot;: &quot;Chaim_McDermott@dana.io&quot;,
        &quot;website&quot;: &quot;conrad.com&quot;,
      },
      {
        &quot;id&quot;: 10,
        &quot;name&quot;: &quot;Clementina DuBuque&quot;,
        &quot;username&quot;: &quot;Moriah.Stanton&quot;,
        &quot;email&quot;: &quot;Rey.Padberg@karina.biz&quot;,
        &quot;website&quot;: &quot;ambrose.net&quot;,
      }
    ]
  }),
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        users: [
            {
                "id": 1,
                "name": "ERYNA MELISSA",
                "username": "TIME TRAVEL IMAGINARIUM",
                "email": "155",
                "website": "ERYNA MELISSA",
            },
            {
                "id": 2,
                "name": "Brian Wong",
                "username": "TIME TRAVEL IMAGINARIUM",
                "email": "155",
                "website": "ERYNA MELISSA",
            },
            {
                "id": 3,
                "name": "BRIAN WONG",
                "username": "SUNSET CRUISE by Crystal Yacht - Adult",
                "email": "82",
                "website": "BRIAN WONG",
            },
            {
                "id": 4,
                "name": "ERYNA MELISSA",
                "username": "SUNSET CRUISE by Crystal Yacht - Child (5 - 12 years old)",
                "email": "33153",
                "website": "NUR NATASHA NABILLA BINTI MOHD NASIR",
            },
            {
                "id": 5,
                "name": "ERYNA MELISSA",
                "username": "TIME TRAVEL IMAGINARIUM",
                "email": "33157",
                "website": "ERYNA MELISSA",
            },
            {
                "id": 6,
                "name": "NUR EZA ANISS",
                "username": "TIME TRAVEL IMAGINARIUM",
                "email": "33157",
                "website": "NUR EZA ANISS",
            },
            {
                "id": 7,
                "name": "ANIS SHAHIRAH",
                "username": "TIME TRAVEL IMAGINARIUM",
                "email": "33151",
                "website": "ANIS SHAHIRAH",
            },
            {
                "id": 8,
                "name": "AMIR NUR AFIQ",
                "username": "TIME TRAVEL IMAGINARIUM",
                "email": "33150",
                "website": "AMIR NUR AFIQ",
            },
            {
                "id": 9,
                "name": "AMIR NUR AFIQ",
                "username": "TIME TRAVEL IMAGINARIUM",
                "email": "33149",
                "website": "AMIR NUR AFIQ",
            },
            {
                "id": 10,
                "name": "ANIS SHAHIRAH",
                "username": "TIME TRAVEL IMAGINARIUM",
                "email": "33148",
                "website": "ANIS SHAHIRAH",
            }
        ]
    }),
}
</script>
