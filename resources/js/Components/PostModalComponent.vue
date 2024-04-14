<template>
    <div class="modal fade" id="postModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">

        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ item_post.title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body>" {{ item_post.content}}>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["item_post"],
    created() {
        console.log("modal created");
    },
    methods: {
        clean: function () {
            this.$emit('closeModalPost');
        }
    },
    watch {
    post: function(newVal, oldVal) {
        $("#postModal").modal("show")
    }
}
closeModalPost: function() {
    this.postSelected = "";
}

};
</script>