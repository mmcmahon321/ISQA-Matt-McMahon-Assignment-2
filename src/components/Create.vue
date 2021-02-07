<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Subscription</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="subscription.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="subscription.description" required>
                </div>

                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" class="form-control" v-model="subscription.amount" required>
                </div>

                <div class="form-group">
                    <label>Date of Purchase</label>
                    <input type="text" class="form-control" v-model="subscription.date_of_purchase" required>
                </div>

                <div class="form-group">
                    <label>Date of Renewal</label>
                    <input type="text" class="form-control" v-model="subscription.date_of_renewal" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Subscription</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  data () {
    return {
      subscription: {
      }
    }
  },
  methods: {
    onFormSubmit (event) {
      event.preventDefault()
      db.collection('subscriptions').add(this.subscription).then(() => {
        alert('Subscription successfully created!')
        this.subscription.name = ''
        this.subscription.description = ''
        this.subscription.amount = ''
        this.subscription.date_of_purchase = ''
        this.subscription.date_of_renewal = ''
      }).catch((error) => {
        console.log(error)
      })
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
