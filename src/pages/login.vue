<template>
    <el-row class="w-full h-screen">
        <el-col :lg="16" :md="12" class=" text-light-50 bg-indigo-500 flex flex-col justify-center items-center">
            <p class="text-5xl font-bold mb-4">shop admin</p>
            <p class="text-3xl ">shop admin</p>

        </el-col>

        <el-col :lg="8" :md="12" class="flex flex-col justify-center items-center">
            <h2 class="text-gray-600 text-3xl font-bold">后台登录</h2>
            <div class="flex justify-center items-center my-5 space-x-2">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>

            </div>

            <el-form :model="form" :rules="rules" ref="formRef">
                <el-form-item label="Username" prop="username">
                    <el-input placeholder="Username" v-model="form.username">

                        <template #prefix>
                            <el-icon>
                                <user />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item label="Password" prop="password">
                    <el-input type="password" placeholder="Password" v-model="form.password">
                        <template #prefix>
                            <el-icon>
                                <lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button class="w-full py-4 bg-indigo-600 text-light-50 rounded-full" size="default" @click="onSubmit"
                        :loading="loading">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { adminLogin } from '~/api/http'
import { ElNotification } from 'element-plus'

// import { useCookies } from '@vueuse/integrations/useCookies'
import { setToken } from '~/utils/auth'


const router = useRouter()


const form = reactive({
    username: 'admin',
    password: '123456'
})

const rules = {
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        }
    ]
}

const formRef = ref(null)
const loading = ref(false)


const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false;
        }
        loading.value = true

        //发请求
        adminLogin(form.username, form.password)
            .then((res) => {
                console.log(res)


                //提示登录成功或失败
                if (res.code == 1) {


                    //将 token 存入cookie
                    // const cookie = useCookies()
                    // cookie.set('admin-token', res.data.token)
                    setToken(res.data.token)

                    ElNotification({
                        message: '登录成功',
                        type: 'success',
                        duration: 2000
                    })
                    router.push('/')
                } else {
                    ElNotification({
                        message: '登录失败',
                        type: 'error',
                        duration: 2000
                    })
                }

            }).finally(() => {
                loading.value = false
            })
        // .catch((err) => {
        //     console.log(err)
        //     ElNotification({
        //         message: err.response.data.message || '请求失败',
        //         type: 'error',
        //         duration: 2000
        //     })

        // })
    })
}



</script>

<style lang="scss" scoped></style>