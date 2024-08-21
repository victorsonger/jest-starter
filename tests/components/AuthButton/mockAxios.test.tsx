// tests/components/AuthButton/mockHttp.test.tsx
// 更偏向真实用例，效果更好
import server from "../../mockServer/server";
import { rest } from "msw";
import { render, screen } from "@testing-library/react";
import AuthButton from "@components/AuthButton";
import React from "react";
import { UserRoleType } from "@apis/user";

// 初始化函数
const setup = (userType: UserRoleType) => {
  server.use(
    rest.get("https://mysite.com/api/role", async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ userType }));
    })
  );
};

describe("AuthButton Mock Http 请求", () => {
  it("可以正确展示普通用户按钮内容", async () => {
    setup("user");

    render(<AuthButton needLogin>你好</AuthButton>);

    expect(await screen.findByText("普通用户你好")).toBeInTheDocument();
  });

  it("可以正确展示管理员按钮内容", async () => {
    // admin的情况，这里写不写setup都行
    // 因为我们的mockServer/handlers默认给所有的https://mysite.com/api/role都返回了userType: 'admin'
    // 除非it中重新setup
    // setup("admin");

    render(<AuthButton needLogin>你好</AuthButton>);

    expect(await screen.findByText("管理员你好")).toBeInTheDocument();
  });
});