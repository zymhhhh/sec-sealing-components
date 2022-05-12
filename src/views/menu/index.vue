<template>
    <div class="menu">
        <s-menu name="a" index="b" icon="c" :data=data1 :defaultActive="1" background-color="lightyellow"></s-menu>
    </div>
    <div class="menu">
        <s-infinite-menu :data=data2 :defaultActive="1" background-color="lightyellow"></s-infinite-menu>
    </div>
</template>
<script lang='ts' setup>
let data1 = [
    {
        a: 'route1',
        b: '1',
        c: 'document'
    },
    {
        a: 'route2',
        b: '2',
        c: 'document'
    }, {
        a: 'route3',
        b: '3',
        c: 'document'
    }, {
        a: 'route4',
        b: '4',
        c: 'document',
        children: [
            {
                a: 'route4-1',
                b: '4-1',
                c: 'document'
            }, {
                a: 'route4-2',
                b: '4-2',
                c: 'document'
            },
        ]
    },

]
let data2 = [
    {
        name: 'route1',
        index: '1',
        icon: 'Document'
    },
    {
        name: 'route2',
        index: '2',
        icon: 'Document'
    }, {
        name: 'route3',
        index: '3',
        icon: 'Document'
    }, {
        name: 'route4',
        index: '4',
        icon: 'Document',
        children: [
            {
                name: 'route4-1',
                index: '4-1',
                icon: 'Document'
            }, {
                name: 'route4-2',
                index: '4-2',
                icon: 'Document',
                children: [
                    {
                        name: 'route4-2-1',
                        index: '4-2-1',
                        icon: 'Document',
                        children: [
                            {
                                name: 'route4-2-1-1',
                                index: '4-2-1-1',
                                icon: 'Document'
                            }, {
                                name: 'route4-2-1-2',
                                index: '4-2-1-2',
                                icon: 'Document',
                                children: [
                                    {
                                        name: 'route4-2-1-2-1',
                                        index: '4-2-1-2-1',
                                        icon: 'Document',
                                        children: [
                                            {
                                                name: 'route4-2-1-2-1-1',
                                                index: '4-2-1-2-1-1',
                                                icon: 'Document'
                                            }, {
                                                name: 'route4-2-1-2-1-2',
                                                index: '4-2-1-2-1-2',
                                                icon: 'Document',
                                                children: [

                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
]
</script>
<style lang='scss' scoped>
.menu {
    width: 400px;
    border: 4px double rgb(143, 139, 224);
    border-radius: 2%;
}

</style>