from flask import Flask,jsonify
app=Flask(__name__)
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/cse',methods=['GET'])
def hello_world():
    l=[]
    f=open('cseids.txt','r')
    f1=open('names.txt','r')
    f2=open('third.txt','r')
    files=f.readlines()
    fi=f1.readlines()
    l1=[]
    for i in files:
        k=i.split(",")
        l1.append(k[0])
    l2=[]
    for i in fi:
        k=i.split(",")
        k1=k[1]
        l2.append(k1[:-1])
    c=0
    l3=[]
    f3=f2.readlines()
    for i in f3:
        k=i.split(",")
        k1=k[1]
        l3.append(k1[:-1])
    for i in range(0,len(l1),1):
        c=c+1
        result={}
        result['photo']="https://intranet.rguktn.ac.in/SMS/usrphotos/user/%s.jpg"%(l1[i])
        result['idnum']=l1[i]
        result['id']=c
        result['name']=l2[i]
        result['gpa']=l3[i]
        l.append(result)
    return jsonify(l)
@app.route('/topper',methods=['GET'])
def index():
    l=[]
    d={}
    d['photo']="https://intranet.rguktn.ac.in/SMS/usrphotos/user/N170846.jpg"
    d['idnum']="N170846"
    d['name']="ROKKAM SUSMITHA"
    d['gpa']="10.0"
    l.append(d)
    return jsonify(l)
@app.route('/cse1',methods=['GET'])
def cse():
    l=[]
    f3=open("myclassresult.txt","r")
    c=0
    files=f3.readlines()
    for i in files:
        c=c+1
        result={}
        if 'N171259' in i:
            k=i.split(",")
            result['photo']="https://intranet.rguktn.ac.in/SMS/usrphotos/user/%s.jpg"%(k[0])
            result['idnum']=k[0]
            result['id']=c
            result['name']=k[1]
            result['gpa']=k[2]
        else:
            k=i.split(",")
            k1=k[2]
            result['photo']="https://intranet.rguktn.ac.in/SMS/usrphotos/user/%s.jpg"%(k[0])
            result['idnum']=k[0]
            result['id']=c
            result['name']=k[1]
            result['gpa']=k1[:-1]
        l.append(result)
    return jsonify(l)
@app.route('/cseremedial',methods=['GET'])
def remedial():
    l=[]
    f1=open('names.txt','r')
    f3=open("kishore.txt","r")
    fi=f1.readlines()
    l1={}
    for i in fi:
        k=i.split(",")
        k1=k[1]
        l1[k[0]]=k1[:-1]
    c=0
    files=f3.readlines()
    for i in files:
        c=c+1
        result={}
        print(c)
        if(c==93):
            k=i.split(",")
            result['photo']="https://intranet.rguktn.ac.in/SMS/usrphotos/user/%s.jpg"%(k[0])
            result['idnum']=k[0]
            result['id']=c
            name=l1[k[0]]
            result['name']=name
            result['subject']=k[1]
        else:
            k=i.split(",")
            k1=k[1]
            result['photo']="https://intranet.rguktn.ac.in/SMS/usrphotos/user/%s.jpg"%(k[0])
            result['idnum']=k[0]
            result['id']=c
            name=l1[k[0]]
            result['name']=l1[k[0]]
            result['subject']=k1[:-1]
        l.append(result)
    return jsonify(l)
if(__name__=="__main__"):
    app.run(debug=True)
