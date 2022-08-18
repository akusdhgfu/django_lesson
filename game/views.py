from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align: center">奥比岛</h1>'
    line2 = '<img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/48540923dd54564eb8bda8b7b3de9c82d0584f67.jpg" width=1500>'
    line3 = '<a href="/play/">点击进入游戏</a>'
    return HttpResponse(line1 + line3 + line2)

def play(request):
    line1 = '<h1 style="text-align: center">游戏界面</h1>'
    line2 = '<img src="http://www.100bt.com/about/aobi/static_images/miji_07.jpg" width=1500>'
    line3 = '<a href="/">点击返回主页面</a>'
    return HttpResponse(line1 + line3 + line2)
