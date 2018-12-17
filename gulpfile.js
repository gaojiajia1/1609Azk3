var gulp=require('gulp');

var server = require('gulp-webserver');

gulp.task('server',function(){
	return gulp.src('base')
	.pipe(server({
		port:9090,
		proxies:[
			{
				source:'/users',target:'http://localhost:3000/users'
			},
			{
				source:'/users/api/add',target:'http://localhost:3000/users/api/add'
			}
		]
	}))
})