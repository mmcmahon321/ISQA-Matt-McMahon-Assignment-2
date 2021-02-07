<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date of Purchase</th>
                        <th>Date of Renewal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subscription in Subscriptions" :key="subscription.key">
                        <td>{{ subscription.name }}</td>
                        <td>{{ subscription.description }}</td>
                        <td>{{ subscription.amount }}</td>
                        <td>{{ subscription.date_of_purchase }}</td>
                        <td>{{ subscription.date_of_renewal }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: subscription.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteSubscription(subscription.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'
export default {
  data () {
    return {
      Subscriptions: []
    }
  },
  created () {
    db.collection('subscriptions').onSnapshot((snapshotChange) => {
      this.Subscriptions = []
      snapshotChange.forEach((doc) => {
        this.Subscriptions.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          amount: doc.data().amount,
          date_of_purchase: doc.data().date_of_purchase,
          date_of_renewal: doc.data().date_of_renewal
        })
      })
    })
  },
  methods: {
    deleteSubscription (id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('subscriptions').doc(id).delete().then(() => {
          console.log('Document deleted!')
        })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
}
</script>

<style>
    .btn-primary {margin-right: 12px;}
    h3 {background-color:white;}
    body {background-color:grey;}
    label {color: black;}
    tbody {color:black;}
</style>
