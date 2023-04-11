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
            <el-form>
                <el-form-item label="Username">
                    <el-input placeholder="Username">

                        <template #prefix>
                            <el-icon>
                                <user />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item label="Password">
                    <el-input type="password" placeholder="Password">
                        <template #prefix>
                            <el-icon>
                                <lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button class="w-full py-4 bg-indigo-600 text-light-50 rounded-full" size="default">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>