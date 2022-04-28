<template>
    <div class="pagination">
        <a :class="['btn-pagination prev-next-btn', firstPageSelected ? 'disabled' : '']"
            @[!firstPageSelected&&`click`]="updatePage(currentPage - 1)">
            <i class="fa fa-angle-left fa-2x"></i>
            <span>Back</span>
        </a>
        <button
            v-for="n in firstPagesVisible"
            :class="['btn-pagination', currentPage === n ? 'active' : '']" 
            @click="updatePage(n)"
        >
            {{ n }}
        </button>
        <button v-show="firstVisiblePage !== firstPagesVisible + 1" class="btn-pagination disabled">...</button>
        <button 
            v-for="page in visiblePages" 
            :key="page.num" 
            :class="['btn-pagination', currentPage === page.num ? 'active' : '']"
            @click="updatePage(page.num)"
        >
            {{ page.num }}
        </button>
        <button v-show="firstVisiblePage + maxVisiblePage < pageNumbers" class="btn-pagination disabled">...</button>
        <button 
            :class="['btn-pagination', currentPage === pageNumbers ? 'active' : '']"
            @click="updatePage(pageNumbers)"
        >
            {{ pageNumbers }}
        </button>
        <a :class="['btn-pagination prev-next-btn', lastPageSelected ? 'disabled' : '']"
            @[!lastPageSelected&&`click`]="updatePage(currentPage + 1)">
            <span>Next</span>
            <i class="fa fa-angle-right fa-2x"></i>
        </a>
    </div>
</template>

<script>

export default {
    name: 'Pagination',

    props: {
        pageNumbers: Number,
        currentPage: {
            default: 1,
            type: Number,
        },
        maxVisiblePage: {
            default: 4,
            type: Number,
        },
        firstPagesVisible: {
            default: 1, 
            type: Number
        }
    },

    methods: {
        updatePage(pageNumber) {
            this.$emit('updatePage', pageNumber)
        },
    },

    computed: {
        firstPageSelected() {
            return this.currentPage === 1
        },
        lastPageSelected() {
            return this.currentPage === this.pageNumbers
        },
        firstVisiblePage() {
            if(this.currentPage <= this.firstPagesVisible){
                return this.firstPagesVisible + 1
            }

            if(this.currentPage >= this.pageNumbers - 1){
                return this.pageNumbers - this.maxVisiblePage
            }

            return Math.max(this.currentPage - Math.floor(this.maxVisiblePage/2), this.firstPagesVisible + 1)
        },
        visiblePages() {
            const range = []

            for(
                let i = this.firstVisiblePage;
                i <= Math.min(this.firstVisiblePage + this.maxVisiblePage - 1, this.pageNumbers);
                i++
            ){
                if(i !== this.pageNumbers){
                    range.push({num: i,})
                }
            }

            return range
        },
    }
}
</script>

<style scoped lang="less">
.pagination {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 20px 0 40px 0;

    .btn-pagination {
        margin: 0 5px;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        border: none;
        font-family: inherit;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        color: #368CE4;
        background-color: transparent;
        align-items: center;
        cursor: pointer;

        &.prev-next-btn {
            font-size: 15px;
            width: auto;
            display: flex;
            padding: 5px;

            &>i {
                margin: 0 5px;
            }
        }

        &.active {
            color: white;
            background-color: #368CE4;
        }

        &.disabled {
            cursor: default;
            color: gray;
        }
    }
}
</style>