<script>
    let { data } = $props();
</script>

<h2>DB Test</h2>

<pre>{JSON.stringify(data.users, null, 2)}</pre>