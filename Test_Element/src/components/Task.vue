<template>
<div>
    <p> {{ TaskName }} 화면입니다.</p>
</div>
</template>

<script>
export default {
    props: ['TaskName', 'TaskColor']
}
</script>